"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const config_1 = require("../config");
const useObservable_1 = tslib_1.__importDefault(require("../useObservable"));
/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @returns a memoized version of the callback that only changes if one of the inputs has changed
 */
function useCallbackObservable(observableGenerator, deps) {
    const [error, setError] = React.useState();
    const submitted$ = React.useRef(new rxjs_1.Subject()).current;
    const [data, , completed] = useObservable_1.default(() => {
        return submitted$.pipe(operators_1.tap(() => setError(undefined)), operators_1.switchMap(args => observableGenerator(...args).pipe(operators_1.catchError(err => {
            config_1.getConfig().onUnhandledError(err, 'hooks');
            setError(err);
            return rxjs_1.NEVER;
        }))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    const callback = React.useCallback((...args) => submitted$.next(args), [submitted$]);
    return [callback, data, error, completed, undefined];
}
exports.default = useCallbackObservable;
