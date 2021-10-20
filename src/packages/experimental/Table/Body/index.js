"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const use_context_selector_1 = require("use-context-selector");
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const Loading_1 = (0, tslib_1.__importDefault)(require("../Loading"));
const TableBody = React.memo(({ children }) => {
    const loading = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.loading);
    return React.createElement("tbody", null, loading ? React.createElement(Loading_1.default, null) : children);
});
exports.default = TableBody;
