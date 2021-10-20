"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const Typography_1 = tslib_1.__importDefault(require("../../../Typography"));
const Subtitle = (_a) => {
    var { children } = _a, props = tslib_1.__rest(_a, ["children"]);
    return (React.createElement(Typography_1.default, Object.assign({}, props, { size: 'small', fontWeight: 'regular', lineHeight: 'compact' }), children));
};
exports.default = React.memo(Subtitle);
