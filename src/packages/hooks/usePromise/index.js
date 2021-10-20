"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const config_1 = require("../config");
/**
 * Return the promise value and unsubscribed if component unmount
 * @param promiseGenerator
 * @param deps
 * @returns [value, error, loading]
 */
function usePromise(promiseGenerator, deps) {
    const [loading, setLoading] = React.useState(true);
    const [result, setResult] = React.useState();
    const [error, setError] = React.useState();
    React.useEffect(() => {
        let isSubscribed = true;
        setLoading(true);
        promiseGenerator()
            .then(result => {
            if (!isSubscribed)
                return;
            setResult(() => result);
        })
            .catch(err => {
            (0, config_1.getConfig)().onUnhandledError(err, 'hooks');
            if (!isSubscribed)
                return;
            setError(err);
        })
            .finally(() => setLoading(false));
        return () => {
            isSubscribed = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return [result, error, loading];
}
exports.default = usePromise;
