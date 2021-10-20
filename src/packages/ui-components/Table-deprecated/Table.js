import { __assign, __read, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable max-lines */
import * as React from 'react';
import TableMUI from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';
import { getReactChildrenComponent, getReactChildrenProps, isReactComponent } from '../Helpers/functions';
import nestedComponent from '../Helpers/nestedComponent';
import { useFirstChildrenProps, useChildrenProps } from '../hooks/useChildrenProps';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import TableActions from './Actions';
import TableCell from './Cell';
import TableCollapse from './Collapse';
import TableColumn from './Column';
import TableContextProvider from './context';
import Actions from './internals/Actions';
import Columns from './internals/Columns';
import Pagination from './internals/Pagination';
import RowsDesktop from './internals/Rows/Desktop';
import RowsMobile from './internals/Rows/Mobile';
import TableOption from './Option';
import TablePagination from './Pagination';
import TableRow from './Row';
var useStyles = createUseStyles({
    fixed: { whiteSpace: 'nowrap' }
});
var getActions = function (content) {
    var _a;
    return (_a = getReactChildrenComponent(content, TableActions).map(function (child) {
        var _a;
        return __assign(__assign({}, child.props), { options: getReactChildrenProps((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children, TableOption) });
    })) === null || _a === void 0 ? void 0 : _a[0];
};
var getCollapseData = function (content) {
    var columns = getReactChildrenProps(content, TableColumn);
    var actions = getActions(content);
    var rows = getReactChildrenComponent(content, TableRow).map(function (row) {
        var _a, _b;
        var options = getReactChildrenComponent((_a = row === null || row === void 0 ? void 0 : row.props) === null || _a === void 0 ? void 0 : _a.children, TableActions).reduce(function (acc, child) {
            var _a;
            return __spreadArray(__spreadArray([], __read(acc), false), __read(getReactChildrenProps((_a = child.props) === null || _a === void 0 ? void 0 : _a.children, TableOption)), false);
        }, []);
        var cells = getReactChildrenComponent((_b = row === null || row === void 0 ? void 0 : row.props) === null || _b === void 0 ? void 0 : _b.children, TableCell).reduce(function (acc, child) {
            return __spreadArray(__spreadArray([], __read(acc), false), [child.props], false);
        }, []);
        return __assign(__assign({}, row.props), { options: options, cells: cells });
    });
    return { columns: columns, rows: rows, actions: actions };
};
var Table = function (props) {
    var classes = useStyles();
    var isMobile = useMediaQuery(function (theme) { return theme.breakpoints.down('sm'); });
    var children = props.children, loading = props.loading, onSortable = props.onSortable, onActionsClick = props.onActionsClick, stickyHeader = props.stickyHeader, size = props.size, maxHeight = props.maxHeight, messages = props.messages, stripedRows = props.stripedRows, initialOrdenation = props.initialOrdenation, rest = __rest(props, ["children", "loading", "onSortable", "onActionsClick", "stickyHeader", "size", "maxHeight", "messages", "stripedRows", "initialOrdenation"]);
    var _a = __read(React.useState([]), 2), options = _a[0], setOptions = _a[1];
    var _b = __read(React.useState(null), 2), currentRow = _b[0], setCurrentRow = _b[1];
    var _c = __read(React.useState(null), 2), anchorEl = _c[0], setAnchorEl = _c[1];
    var _d = __read(React.useState(null), 2), currentItemCollapse = _d[0], setCurrentItemCollapse = _d[1];
    var columns = useChildrenProps(children, TableColumn);
    var pagination = useFirstChildrenProps(children, TablePagination);
    var actions = React.useMemo(function () { return getActions(children); }, [children]);
    var rows = React.useMemo(function () {
        return React.Children.map(children, function (child) {
            var _a, _b, _c, _d;
            if (!isReactComponent(child, TableRow))
                return;
            var cells = getReactChildrenComponent((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children, TableCell).reduce(function (acc, child) {
                return __spreadArray(__spreadArray([], __read(acc), false), [child.props], false);
            }, []);
            var options = getReactChildrenComponent((_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.children, TableActions).reduce(function (acc, child) {
                var _a;
                return __spreadArray(__spreadArray([], __read(acc), false), __read(getReactChildrenProps((_a = child.props) === null || _a === void 0 ? void 0 : _a.children, TableOption)), false);
            }, []);
            var collapse = (_d = getReactChildrenComponent((_c = child === null || child === void 0 ? void 0 : child.props) === null || _c === void 0 ? void 0 : _c.children, TableCollapse).map(function (child) {
                var _a;
                return __assign(__assign({}, child.props), getCollapseData((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children));
            })) === null || _d === void 0 ? void 0 : _d[0];
            return __assign(__assign({}, child.props), { cells: cells, options: options, collapse: collapse });
        });
    }, [children]);
    var handleSetCurrentRow = React.useCallback(function (event, row) {
        if (row === void 0) { row = null; }
        if (!row.data) {
            console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
        }
        setCurrentRow(row);
        setAnchorEl(event.currentTarget);
        setOptions(row === null || row === void 0 ? void 0 : row.options);
    }, [setAnchorEl, setOptions, setCurrentRow]);
    var handleClickCollapse = React.useCallback(function (row) {
        var _a, _b;
        var callback = (_a = row === null || row === void 0 ? void 0 : row.collapse) === null || _a === void 0 ? void 0 : _a.onCollapse;
        var data = (_b = row === null || row === void 0 ? void 0 : row.data) !== null && _b !== void 0 ? _b : {};
        if (currentItemCollapse && isEqual(currentItemCollapse, data)) {
            callback && callback(null);
            setCurrentItemCollapse(null);
            return;
        }
        callback && callback(data);
        setCurrentItemCollapse(data);
    }, [currentItemCollapse]);
    var handleClickActions = React.useCallback(function (event, data) {
        onActionsClick && onActionsClick(event, data);
    }, [onActionsClick]);
    var hasCollapseData = React.useMemo(function () { return rows.some(function (v) { return v.collapse; }); }, [rows]);
    var numberColumns = React.useMemo(function () { return (columns === null || columns === void 0 ? void 0 : columns.length) + Number(!!actions) + Number(hasCollapseData) || 0; }, [columns, actions, hasCollapseData]);
    var hasColumnFixed = React.useMemo(function () { return !!((actions === null || actions === void 0 ? void 0 : actions.fixed) || ((columns === null || columns === void 0 ? void 0 : columns.length) && columns.filter(function (c) { return c.fixed; }).length)); }, [actions, columns]);
    var hasColumnAction = React.useMemo(function () { return columns === null || columns === void 0 ? void 0 : columns.some(function (c) { return (c === null || c === void 0 ? void 0 : c.type) === 'action'; }); }, [columns]);
    var tableMessages = React.useMemo(function () { return ({
        empty: (messages === null || messages === void 0 ? void 0 : messages.empty) ? messages.empty : 'Nenhum registro encontrado.'
    }); }, [messages]);
    var contextValue = React.useMemo(function () { return ({
        loading: loading,
        onSortable: onSortable,
        messages: tableMessages,
        currentRow: currentRow,
        setCurrentRow: setCurrentRow,
        columns: columns,
        rows: rows,
        actions: actions,
        anchorEl: anchorEl,
        setAnchorEl: setAnchorEl,
        options: options,
        setOptions: setOptions,
        pagination: pagination,
        hasCollapseData: hasCollapseData,
        hasColumnAction: hasColumnAction,
        numberColumns: numberColumns,
        isMobile: isMobile,
        stripedRows: stripedRows,
        initialOrdenation: initialOrdenation
    }); }, [
        actions,
        anchorEl,
        columns,
        currentRow,
        hasCollapseData,
        hasColumnAction,
        loading,
        numberColumns,
        onSortable,
        options,
        pagination,
        rows,
        isMobile,
        tableMessages,
        stripedRows,
        initialOrdenation
    ]);
    return (_jsxs(TableContextProvider, __assign({ value: contextValue }, { children: [isMobile && (_jsx("div", __assign({}, rest, { children: _jsx(RowsMobile, { currentItemCollapse: currentItemCollapse, setCurrentItemCollapse: setCurrentItemCollapse, handleSetCurrentRow: handleSetCurrentRow, handleClickCollapse: handleClickCollapse, handleClickActions: handleClickActions }, void 0) }), void 0)), !isMobile && (_jsx(TableContainer, __assign({ style: { maxHeight: !!maxHeight && maxHeight } }, { children: _jsxs(TableMUI, __assign({ stickyHeader: stickyHeader, size: size, className: clsx(hasColumnFixed && classes.fixed) }, rest, { children: [_jsx(Columns, {}, void 0), _jsx(RowsDesktop, { currentItemCollapse: currentItemCollapse, setCurrentItemCollapse: setCurrentItemCollapse, handleSetCurrentRow: handleSetCurrentRow, handleClickCollapse: handleClickCollapse, handleClickActions: handleClickActions }, void 0)] }), void 0) }), void 0)), _jsx(Pagination, {}, void 0), _jsx(Actions, {}, void 0)] }), void 0));
};
export default nestedComponent(withHoustonTheme(React.memo(Table)), {
    Column: TableColumn,
    Row: TableRow,
    Cell: TableCell,
    Actions: TableActions,
    Option: TableOption,
    Pagination: TablePagination,
    Collapse: TableCollapse
});
