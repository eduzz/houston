"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const use_context_selector_1 = require("use-context-selector");
const createUseStyles_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/createUseStyles"));
const context_1 = (0, tslib_1.__importDefault)(require("../context"));
const SortLabel_1 = (0, tslib_1.__importDefault)(require("./SortLabel"));
const useStyles = (0, createUseStyles_1.default)(theme => ({
    root: ({ size }) => ({
        padding: size === 'small' ? '8px 12px' : '8px 20px',
        borderBottom: `1px solid ${theme.colors.grey[200]}`
    })
}));
const TableColumn = React.memo((_a) => {
    var { sortableField, children, className, align } = _a, rest = (0, tslib_1.__rest)(_a, ["sortableField", "children", "className", "align"]);
    const registerColumn = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.registerColumn);
    const onSort = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.onSort);
    const sort = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.sort);
    const loading = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.loading);
    const tableSize = (0, use_context_selector_1.useContextSelector)(context_1.default, context => context.size);
    const classes = useStyles({ size: tableSize });
    const cellRef = React.useRef();
    const isSorted = (sort === null || sort === void 0 ? void 0 : sort.field) === sortableField;
    const handleSort = React.useCallback(() => {
        if (!onSort) {
            throw new Error('@eduzz/houston-ui: add the onSort prop to the Table to filter the fields');
        }
        onSort({
            field: sortableField,
            direction: !isSorted || (sort === null || sort === void 0 ? void 0 : sort.direction) === 'desc' ? 'asc' : 'desc'
        });
    }, [onSort, sortableField, isSorted, sort === null || sort === void 0 ? void 0 : sort.direction]);
    React.useEffect(() => {
        const unregister = registerColumn();
        return () => unregister();
    }, [registerColumn]);
    return (React.createElement("th", Object.assign({ className: (0, clsx_1.default)(classes.root, className, `column-align-${align !== null && align !== void 0 ? align : 'left'}`), ref: cellRef }, rest),
        React.createElement(SortLabel_1.default, { sortable: !!sortableField, active: isSorted, disabled: loading, direction: isSorted ? sort === null || sort === void 0 ? void 0 : sort.direction : 'asc', onClick: handleSort }, children)));
});
exports.default = TableColumn;
