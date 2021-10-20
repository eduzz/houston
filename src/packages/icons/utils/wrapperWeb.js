"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const getIconSize_1 = require("./getIconSize");
const IconBase = React.memo((_a) => {
    var { children, size, className } = _a, rest = (0, tslib_1.__rest)(_a, ["children", "size", "className"]);
    const child = React.useMemo(() => React.cloneElement(children, { width: (0, getIconSize_1.default)(size) }), [children, size]);
    const style = React.useMemo(() => ({ width: (0, getIconSize_1.default)(size), height: (0, getIconSize_1.default)(size) }), [size]);
    return (React.createElement("span", Object.assign({ className: `houston-icon ${className ? className : ''}`, style: style }, rest), child));
});
exports.default = IconBase;
