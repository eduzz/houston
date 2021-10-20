"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const config_1 = require("../config");
/**
 * Create a memoized observable and unsubscribe automatically if component unmount, first value will be undefined
 * @param observableGenerator Function to return a observable
 * @param deps List of deps
 * @returns [observableValue, error, complete, loading]
 */
function useObservable(observableGenerator, deps) {
    const [value, setValue] = React.useState(undefined);
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [complete, setComplete] = React.useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cb = React.useCallback(observableGenerator, deps);
    React.useEffect(() => {
        setValue(undefined);
        setError(undefined);
        setComplete(false);
        setLoading(true);
        const sub = cb().subscribe({
            next: (data) => {
                setValue(() => data);
                setError(undefined);
                setLoading(false);
            },
            error: err => {
                (0, config_1.getConfig)().onUnhandledError(err, 'hooks');
                setValue(null);
                setError(err);
                setLoading(false);
            },
            complete: () => {
                setComplete(true);
                setLoading(false);
            }
        });
        return () => sub.unsubscribe();
    }, [cb]);
    return [value, error, complete, loading];
}
exports.default = useObservable;
