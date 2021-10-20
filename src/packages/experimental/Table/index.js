"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nestedComponent_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/Helpers/nestedComponent"));
const Action_1 = (0, tslib_1.__importDefault)(require("./Action"));
const Body_1 = (0, tslib_1.__importDefault)(require("./Body"));
const Cell_1 = (0, tslib_1.__importDefault)(require("./Cell"));
const Collapse_1 = (0, tslib_1.__importDefault)(require("./Collapse"));
const Column_1 = (0, tslib_1.__importDefault)(require("./Column"));
const Empty_1 = (0, tslib_1.__importDefault)(require("./Empty"));
const Error_1 = (0, tslib_1.__importDefault)(require("./Error"));
const Header_1 = (0, tslib_1.__importDefault)(require("./Header"));
const Pagination_1 = (0, tslib_1.__importDefault)(require("./Pagination"));
const Row_1 = (0, tslib_1.__importDefault)(require("./Row"));
const Table_1 = (0, tslib_1.__importDefault)(require("./Table"));
exports.default = (0, nestedComponent_1.default)(Table_1.default, {
    Body: Body_1.default,
    Cell: Cell_1.default,
    Column: Column_1.default,
    Collapse: Collapse_1.default,
    Empty: Empty_1.default,
    Header: Header_1.default,
    Row: Row_1.default,
    Error: Error_1.default,
    Pagination: Pagination_1.default,
    Action: Action_1.default
});
