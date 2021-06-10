"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = require("react");
const clsx_1 = require("clsx");
const getIconSize_1 = require("./getIconSize");
const IconBase = React.memo((_a) => {
    var { children, size, className } = _a, rest = tslib_1.__rest(_a, ["children", "size", "className"]);
    const child = React.useMemo(() => React.cloneElement(children, {
        width: getIconSize_1.default(size)
    }), [children, size]);
    return (React.createElement("span", Object.assign({ className: clsx_1.default('houston-icon', className) }, rest), child));
});
exports.default = IconBase;
