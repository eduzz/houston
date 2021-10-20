"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const use_context_selector_1 = require("use-context-selector");
const Column_1 = (0, tslib_1.__importDefault)(require("../Column"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const TableHeader = React.memo(({ children, disabledActionsColumn }) => {
    const hasActions = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.rows.some(r => r.hasActions));
    const hasCollapse = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.rows.some(r => r.hasCollapse));
    const columnActionTitle = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.columnActionTitle);
    return (React.createElement("thead", null,
        React.createElement("tr", null,
            children,
            hasActions && !disabledActionsColumn && (React.createElement(Column_1.default, { width: 30, align: 'right' }, columnActionTitle !== null && columnActionTitle !== void 0 ? columnActionTitle : 'Ações')),
            hasCollapse && React.createElement(Column_1.default, { width: 30 }))));
});
exports.default = TableHeader;
