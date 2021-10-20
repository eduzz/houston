"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const config_1 = require("../config");
const useObservable_1 = tslib_1.__importDefault(require("../useObservable"));
/**
 * Create a memoized observable and unsubscribe automatically if component unmount and a
 * retry function
 * @returns [observableValue, error, completed, retryFunction, loading]
 */
function useRetryableObservable(observableGenerator, deps) {
    const [data, setData] = React.useState();
    const [error, setError] = React.useState();
    const doRetry$ = React.useRef(new rxjs_1.BehaviorSubject(true)).current;
    const [, , completed, loading] = useObservable_1.default(() => {
        return doRetry$.pipe(operators_1.tap(() => {
            setData(undefined);
            setError(undefined);
        }), operators_1.switchMap(() => observableGenerator().pipe(operators_1.tap(result => setData(result)), operators_1.catchError(err => {
            config_1.getConfig().onUnhandledError(err, 'hooks');
            setError(err);
            return rxjs_1.NEVER;
        }))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    const retry = React.useCallback(() => doRetry$.next(true), [doRetry$]);
    return [data, error, completed, retry, loading, undefined];
}
exports.default = useRetryableObservable;
