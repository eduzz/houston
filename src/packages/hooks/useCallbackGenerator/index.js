"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
function useCallbackGenerator(generator, deps) {
    const [cache] = React.useState(() => ({}));
    const result = React.useCallback((key, ...args) => {
        if (!cache[key]) {
            cache[key] = { args, func: (...callArgs) => generator(...args, ...callArgs) };
        }
        return cache[key].func;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        Object.keys(cache).forEach(key => {
            cache[key].func = (...callArgs) => generator(...cache[key].args, ...callArgs);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deps]);
    return result;
}
exports.default = useCallbackGenerator;
