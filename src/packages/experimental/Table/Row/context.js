"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const use_context_selector_1 = require("use-context-selector");
const TableRowContext = (0, use_context_selector_1.createContext)({
    registerCollapse: () => () => null,
    registerAction: () => () => null
});
exports.default = TableRowContext;
