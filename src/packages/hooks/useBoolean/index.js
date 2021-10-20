"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
/**
 * Simplify the way to use a boolean state
 * @param initial A boolen of a function that return a  boolean
 * @returns [value, toogleValue, toTrue, toFalse]
 */
function useBoolean(initial) {
    const [value, setValue] = React.useState(initial !== null && initial !== void 0 ? initial : false);
    const toogleValue = React.useCallback(() => setValue(value => !value), []);
    const toTrue = React.useCallback(() => setValue(() => true), []);
    const toFalse = React.useCallback(() => setValue(() => false), []);
    return [value, toogleValue, toTrue, toFalse];
}
exports.default = useBoolean;
