"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const use_context_selector_1 = require("use-context-selector");
const TableContext = (0, use_context_selector_1.createContext)({
    loading: false,
    onSort: () => null,
    columns: [],
    registerColumn: () => () => null,
    onShowAction: () => null,
    rowMapLabel: {},
    rows: [],
    registerRow: () => () => null,
    stripedRows: false,
    size: 'medium',
    hasCollapseInRows: false,
    hasActionInRows: false
});
exports.default = TableContext;
