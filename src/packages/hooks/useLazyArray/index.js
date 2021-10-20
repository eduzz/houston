"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
/**
 * Create new array that will add the orignal array data progressively
 * @returns [observableValue, error, isCompleted]
 */
function useLazyArray(data, options) {
    const [lazyArray, setLazyArray] = React.useState([]);
    React.useEffect(() => {
        var _a, _b, _c;
        const chunckSize = (_a = options === null || options === void 0 ? void 0 : options.chunckSize) !== null && _a !== void 0 ? _a : 10;
        const intervalTime = (_b = options === null || options === void 0 ? void 0 : options.intervalTime) !== null && _b !== void 0 ? _b : 100;
        const chunks = Math.ceil(((_c = data === null || data === void 0 ? void 0 : data.length) !== null && _c !== void 0 ? _c : 0) / chunckSize);
        if (!data || !data.length || chunks === 1) {
            setLazyArray(data);
            return () => null;
        }
        setLazyArray([]);
        let index = 0;
        const interval = setInterval(() => {
            var _a;
            const start = index * chunckSize;
            const slice = (_a = data === null || data === void 0 ? void 0 : data.slice(start, start + chunckSize)) !== null && _a !== void 0 ? _a : [];
            setLazyArray(rows => [...rows, ...slice]);
            index++;
            if (index >= chunks)
                clearInterval(interval);
        }, intervalTime);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return lazyArray;
}
exports.default = useLazyArray;
