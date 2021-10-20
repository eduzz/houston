"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const react_1 = require("react");
const usePromise_1 = (0, tslib_1.__importDefault)(require("../usePromise"));
/**
 * Return the promise value and unsubscribed if component unmount
 * @param promiseGenerator
 * @param deps
 * @returns [value, error, loading, refresh]
 */
function usePromiseRefresh(promiseGenerator, deps) {
    const [refresh, setRefresh] = React.useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [data, error, loading] = (0, usePromise_1.default)(promiseGenerator, [refresh, ...deps]);
    const onRetry = (0, react_1.useCallback)(() => setRefresh(Date.now()), []);
    return [data, error, loading, onRetry];
}
exports.default = usePromiseRefresh;
