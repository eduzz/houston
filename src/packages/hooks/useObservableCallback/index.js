"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const config_1 = require("../config");
const useObservable_1 = (0, tslib_1.__importDefault)(require("../useObservable"));
/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @param observableGenerator Function to return a observable
 * @param deps List of deps
 * @returns [callbackFunction, observableValue, error, complete, loading]
 */
function useObservableCallback(observableGenerator, deps) {
    const [error, setError] = React.useState();
    const submitted$ = React.useRef(new rxjs_1.Subject()).current;
    const [data, , completed, loading] = (0, useObservable_1.default)(() => {
        return submitted$.pipe((0, operators_1.tap)(() => setError(undefined)), (0, operators_1.switchMap)(args => observableGenerator(...args).pipe((0, operators_1.catchError)(err => {
            (0, config_1.getConfig)().onUnhandledError(err, 'hooks');
            setError(err);
            return rxjs_1.NEVER;
        }))));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    const callback = React.useCallback((...args) => submitted$.next(args), [submitted$]);
    return [callback, data, error, completed, loading];
}
exports.default = useObservableCallback;
