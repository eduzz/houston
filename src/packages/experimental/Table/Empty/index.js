"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const use_context_selector_1 = require("use-context-selector");
const Typography_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Typography"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const TableEmpty = React.memo(({ children, count }) => {
    const columnsLen = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.columns.length);
    if (count)
        return null;
    children = children !== null && children !== void 0 ? children : 'Nenhum dado encontrado';
    return (React.createElement("tr", { className: 'table-empty-message' },
        React.createElement("td", { align: 'center', colSpan: columnsLen }, typeof children === 'string' ? (React.createElement(Typography_1.default, { size: 'normal', fontWeight: 'regular', lineHeight: 'comfortable' }, children)) : (children))));
});
exports.default = TableEmpty;
