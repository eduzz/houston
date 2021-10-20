import { __assign, __read, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';
import useBoolean from '@eduzz/houston-hooks/useBoolean';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import MenuActions from './Action/Menu';
import TableCollapseContext from './CollapseContent/context';
import TableContext from './context';
import { bindMutationObserver } from './observer';
import useStyles from './styles';
var columnsKeyIncrementer = 0, rowKeyIncremeter = 0;
var Table = function (props) {
    var _a;
    var _b = props.size, size = _b === void 0 ? 'medium' : _b, id = props.id, children = props.children, loading = props.loading, sort = props.sort, onSort = props.onSort, maxHeight = props.maxHeight, stripedRows = props.stripedRows, columnActionTitle = props.columnActionTitle, className = props.className, loadingText = props.loadingText;
    var classes = useStyles();
    var isCollapseContent = useContextSelector(TableCollapseContext, function (context) { return context.isCollapseContent; });
    var tableRef = React.useRef();
    var mediaQueryMobile = useMediaQuery("(max-width: " + ((_a = props.mobileWidth) !== null && _a !== void 0 ? _a : 600) + "px)");
    var responsive = typeof props.mobileWidth === 'boolean' ? props.mobileWidth : mediaQueryMobile;
    var _c = __read(useBoolean(false), 4), openedMenuActions = _c[0], openMenuActions = _c[2], closeMenuActions = _c[3];
    var _d = __read(React.useState(), 2), menuActionOptions = _d[0], setMenuActionOptions = _d[1];
    var _e = __read(React.useState({}), 2), rowMapLabel = _e[0], setRowMapLabel = _e[1];
    var _f = __read(React.useState(function () { return []; }), 2), columns = _f[0], setColumns = _f[1];
    var _g = __read(React.useState([]), 2), rows = _g[0], setRows = _g[1];
    var onShowAction = React.useCallback(function (data) {
        setMenuActionOptions(data);
        openMenuActions();
    }, [openMenuActions]);
    var registerColumn = React.useCallback(function () {
        var key = "column-" + ++columnsKeyIncrementer;
        setColumns(function (columns) { return __spreadArray(__spreadArray([], __read(columns), false), [key], false); });
        return function () { return setColumns(function (columns) { return columns.filter(function (c) { return c != key; }); }); };
    }, []);
    var registerRow = React.useCallback(function (row) {
        var key = "table-row-" + ++rowKeyIncremeter;
        setRows(function (rows) { return __spreadArray(__spreadArray([], __read(rows), false), [__assign({ key: key }, row)], false); });
        return function () { return setRows(function (rows) { return rows.filter(function (r) { return r.key !== key; }); }); };
    }, []);
    var hasCollapseInRows = React.useMemo(function () { return !isCollapseContent && (rows === null || rows === void 0 ? void 0 : rows.some(function (r) { return r.hasCollapse; })); }, [isCollapseContent, rows]);
    var hasActionInRows = React.useMemo(function () { return rows === null || rows === void 0 ? void 0 : rows.some(function (r) { return r.hasActions; }); }, [rows]);
    React.useEffect(function () {
        var unbind = bindMutationObserver(tableRef === null || tableRef === void 0 ? void 0 : tableRef.current, function (rowMap) { return setRowMapLabel(rowMap); });
        return function () { return unbind(); };
    }, []);
    var contextValue = React.useMemo(function () { return ({
        loading: loading !== null && loading !== void 0 ? loading : false,
        loadingText: loadingText !== null && loadingText !== void 0 ? loadingText : 'Carregando...',
        sort: sort,
        onSort: onSort,
        onShowAction: onShowAction,
        registerColumn: registerColumn,
        rowMapLabel: rowMapLabel,
        columns: columns,
        rows: rows,
        registerRow: registerRow,
        stripedRows: stripedRows,
        columnActionTitle: columnActionTitle,
        size: isCollapseContent ? 'small' : size,
        hasCollapseInRows: hasCollapseInRows,
        hasActionInRows: hasActionInRows,
        isCollapseContent: isCollapseContent
    }); }, [
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
        isCollapseContent,
        size,
        hasCollapseInRows,
        hasActionInRows
    ]);
    return (_jsx(TableContext.Provider, __assign({ value: contextValue }, { children: _jsx(TableContainer, __assign({ className: classes.tableContainer, style: { maxHeight: maxHeight } }, { children: _jsxs("table", __assign({ id: id, ref: tableRef, className: clsx(classes.table, responsive && classes.tableResponsive, className) }, { children: [children, _jsx(MenuActions, { open: openedMenuActions, anchorEl: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.anchorEl, options: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.actions, rowData: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.rowData, rowIndex: menuActionOptions === null || menuActionOptions === void 0 ? void 0 : menuActionOptions.rowIndex, onClose: closeMenuActions }, void 0)] }), void 0) }), void 0) }), void 0));
};
export default withHoustonTheme(React.memo(Table));
