"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const TableContainer_1 = (0, tslib_1.__importDefault)(require("@mui/material/TableContainer"));
const useMediaQuery_1 = (0, tslib_1.__importDefault)(require("@mui/material/useMediaQuery"));
const clsx_1 = (0, tslib_1.__importDefault)(require("clsx"));
const useBoolean_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-hooks/useBoolean"));
const WrapperTheme_1 = (0, tslib_1.__importDefault)(require("@eduzz/houston-ui/styles/ThemeProvider/WrapperTheme"));
const Menu_1 = (0, tslib_1.__importDefault)(require("./Action/Menu"));
const context_1 = (0, tslib_1.__importDefault)(require("./context"));
const observer_1 = require("./observer");
const styles_1 = (0, tslib_1.__importDefault)(require("./styles"));
let columnsKeyIncrementer = 0, rowKeyIncremeter = 0;
const Table = props => {
    var _a;
    const { 
    // stickyHeader,
    size, id, children, loading, sort, onSort, maxHeight, stripedRows, columnActionTitle, className, mobileWidth, loadingText } = props;
    const tableRef = React.useRef();
    const mediaQueryMobile = (0, useMediaQuery_1.default)(`(max-width: ${(_a = props.mobileWidth) !== null && _a !== void 0 ? _a : 600}px)`);
    const responsive = typeof props.mobileWidth === 'boolean' ? props.mobileWidth : mediaQueryMobile;
    const [openedMenuActions, , openMenuActions, closeMenuActions] = (0, useBoolean_1.default)(false);
    const [menuActionOptions, setMenuActionOptions] = React.useState();
    const [rowMapLabel, setRowMapLabel] = React.useState({});
    const [columns, setColumns] = React.useState(() => []);
    const [rows, setRows] = React.useState([]);
    const propsStyle = React.useMemo(() => ({ maxHeight, mobileWidth }), [maxHeight, mobileWidth]);
    const classes = (0, styles_1.default)(propsStyle);
    const onShowAction = React.useCallback((data) => {
        setMenuActionOptions(data);
        openMenuActions();
    }, [openMenuActions]);
    const registerColumn = React.useCallback(() => {
        const key = `column-${++columnsKeyIncrementer}`;
        setColumns(columns => [...columns, key]);
        return () => setColumns(columns => columns.filter(c => c != key));
    }, []);
    const registerRow = React.useCallback((row) => {
        const key = `table-row-${++rowKeyIncremeter}`;
        setRows(rows => [...rows, Object.assign({ key }, row)]);
        return () => setRows(rows => rows.filter(r => r.key !== key));
    }, []);
    const hasCollapseInRows = React.useMemo(() => rows === null || rows === void 0 ? void 0 : rows.some(r => r.hasCollapse), [rows]);
    const hasActionInRows = React.useMemo(() => rows === null || rows === void 0 ? void 0 : rows.some(r => r.hasActions), [rows]);
    React.useEffect(() => {
        const unbind = (0, observer_1.bindMutationObserver)(tableRef.current, rowMap => setRowMapLabel(rowMap));
        return () => unbind();
    }, []);
    const contextValue = React.useMemo(() => ({
        loading: loading !== null && loading !== void 0 ? loading : false,
        loadingText: loadingText !== null && loadingText !== void 0 ? loadingText : 'Carregando...',
        sort,
        onSort,
        onShowAction,
        registerColumn,
        rowMapLabel,
        columns,
        rows,
        registerRow,
        stripedRows,
        columnActionTitle,
        size: size !== null && size !== void 0 ? size : 'medium',
        hasCollapseInRows,
        hasActionInRows
    }), [
        loading,
        loadingText,
        sort,
        onSort,
        onShowAction,
        registerColumn,
        rowMapLabel,
        columns,
        rows,
        registerRow,
        stripedRows,
        columnActionTitle,
        size,
        hasCollapseInRows,
        hasActionInRows
    ]);
    return (React.createElement(context_1.default.Provider, { value: contextValue },
        React.createElement(TableContainer_1.default, { className: classes.tableContainer },
            React.createElement("table", { 
                // stickyHeader={stickyHeader}
                id: id, ref: tableRef, className: (0, clsx_1.default)(classes.table, responsive && classes.tableResponsive, className) },
                children,
                React.createElement(Menu_1.default, { open: openedMenuActions, anchorEl: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.anchorEl, options: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.actions, rowData: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.rowData, rowIndex: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.rowIndex, onClose: closeMenuActions })))));
};
exports.default = (0, WrapperTheme_1.default)(React.memo(Table));
