"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const LinearProgress_1 = (0, tslib_1.__importDefault)(require("@mui/material/LinearProgress"));
const use_context_selector_1 = require("use-context-selector");
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const Typography_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Typography"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const useStyle = (0, createUseStyles_1.default)(theme => ({
    text: {
        padding: theme.spacing(5)
    }
}));
const TableLoading = React.memo(() => {
    const columnsLen = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.columns.length);
    const loading = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.loading);
    const loadingText = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.loadingText);
    const classes = useStyle();
    if (!loading)
        return null;
    return (React.createElement("tr", { className: 'table-loader' },
        React.createElement("td", { align: 'center', colSpan: columnsLen },
            React.createElement(LinearProgress_1.default, null),
            React.createElement(Typography_1.default, { size: 'normal', fontWeight: 'regular', lineHeight: 'comfortable', className: classes.text }, loadingText))));
});
exports.default = TableLoading;
