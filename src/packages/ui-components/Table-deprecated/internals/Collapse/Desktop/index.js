import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CollapseMUI from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// @ts-ignore
import isEqual from 'lodash/isEqual';
import createUseStyles from '../../../../styles/createUseStyles';
import { useTableContext } from '../../../context';
import Cell from '../../Cell/Desktop';
import MenuActions from '../../MenuActions';
import { useCollapse } from '../context';
import LoaderCollapse from './Loader';
var useStyles = createUseStyles(function (theme) { return ({
    rowCollapse: {
        '& > *': {
            borderBottom: 'unset'
        }
    },
    cellCollapse: {
        paddingTop: 0,
        paddingBottom: 0,
        background: theme.colors.grey[200]
    },
    wrapperButtonActions: {
        display: 'inline-flex',
        cursor: 'pointer',
        lineHeight: 0,
        position: 'relative',
        top: 2
    },
    list: {
        borderBottom: 0
    }
}); });
var Collapse = React.memo(function () {
    var classes = useStyles();
    var numberColumns = useTableContext().numberColumns;
    var _a = useCollapse(), collapse = _a.collapse, row = _a.row, handleSetCurrentRow = _a.handleSetCurrentRow, anchorEl = _a.anchorEl, handleCloseActions = _a.handleCloseActions, options = _a.options, currentRow = _a.currentRow;
    var _b = row === null || row === void 0 ? void 0 : row.collapse, _c = _b.loading, loading = _c === void 0 ? false : _c, _d = _b.columns, columns = _d === void 0 ? [] : _d, _e = _b.actions, actions = _e === void 0 ? null : _e, _f = _b.type, type = _f === void 0 ? 'table' : _f, rows = _b.rows, onActionsClick = _b.onActionsClick;
    var columnAction = React.useMemo(function () { return columns.find(function (c) { return c.type === 'action'; }); }, [columns]);
    var numberColumnsCollapse = React.useMemo(function () { return (columns === null || columns === void 0 ? void 0 : columns.length) + 1 + Number(!!actions) || 1; }, [columns, actions]);
    var rowData = row.data;
    return (_jsxs(_Fragment, { children: [_jsx(TableRow, __assign({ className: classes.rowCollapse }, { children: _jsx(TableCell, __assign({ colSpan: numberColumns, className: classes.cellCollapse }, { children: _jsx(CollapseMUI, __assign({ in: collapse && isEqual(collapse, row.data), timeout: 350, unmountOnExit: true }, { children: _jsxs(Table, __assign({ size: 'small' }, { children: [!loading && type === 'table' && (_jsx(TableHead, { children: _jsxs(TableRow, { children: [columns
                                                .filter(function (c) { return c.type !== 'action'; })
                                                .map(function (column) {
                                                var columnProps = __assign({}, column);
                                                delete columnProps.sortable;
                                                return (_jsx(TableCell, __assign({}, columnProps, { children: column.label }), "collapse-column-" + column.field));
                                            }), !!columnAction && (_jsxs(TableCell, __assign({ align: columnAction === null || columnAction === void 0 ? void 0 : columnAction.align }, { children: [(columnAction === null || columnAction === void 0 ? void 0 : columnAction.label) === false && _jsx(_Fragment, { children: "\u00A0" }, void 0), !(columnAction === null || columnAction === void 0 ? void 0 : columnAction.label) && columnAction.label !== false ? 'Ações' : columnAction.label] }), void 0)), !columnAction && actions && (_jsxs(TableCell, __assign({ align: actions === null || actions === void 0 ? void 0 : actions.align }, { children: [(actions === null || actions === void 0 ? void 0 : actions.label) === false && _jsx(_Fragment, { children: "\u00A0" }, void 0), !(actions === null || actions === void 0 ? void 0 : actions.label) && actions.label !== false ? 'Ações' : actions.label] }), void 0))] }, void 0) }, void 0)), _jsxs(TableBody, { children: [loading && _jsx(LoaderCollapse, { columns: numberColumnsCollapse }, void 0), !loading &&
                                            (rows === null || rows === void 0 ? void 0 : rows.map(function (row, index) {
                                                var _a;
                                                return (_jsxs(TableRow, { children: [(_a = row === null || row === void 0 ? void 0 : row.cells) === null || _a === void 0 ? void 0 : _a.map(function (cell, i) { return (_jsx(Cell, __assign({ list: type === 'list' }, cell), "collapse-row-" + index + "-cell-" + i)); }), !!columnAction && (_jsx(TableCell, __assign({ align: 'right', classes: { root: type === 'list' && classes.list } }, { children: _jsx("div", __assign({ className: classes.wrapperButtonActions, onClick: function (e) { return onActionsClick(e, rowData); } }, { children: _jsx(MoreHorizIcon, {}, void 0) }), void 0) }), void 0)), !columnAction && actions && (_jsx(TableCell, __assign({ align: 'right', classes: { root: type === 'list' && classes.list } }, { children: _jsx("div", __assign({ className: classes.wrapperButtonActions, onClick: function (e) { return handleSetCurrentRow(e, row); } }, { children: _jsx(MoreHorizIcon, {}, void 0) }), void 0) }), void 0))] }, "collapse-row-" + index));
                                            }))] }, void 0)] }), void 0) }), void 0) }), void 0) }), void 0), _jsx(MenuActions, { anchorEl: anchorEl, onClose: handleCloseActions, options: !(options === null || options === void 0 ? void 0 : options.length) ? actions === null || actions === void 0 ? void 0 : actions.options : options, currentRow: currentRow }, void 0)] }, void 0));
});
export default Collapse;
