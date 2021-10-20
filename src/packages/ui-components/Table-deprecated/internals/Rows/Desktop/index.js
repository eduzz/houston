import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';
import ButtonIcon from '../../../../ButtonIcon';
import createUseStyles from '../../../../styles/createUseStyles';
import { useTableContext } from '../../../context';
import Cell from '../../Cell/Desktop';
import Collapse from '../../Collapse';
import RowsEmpty from './Empty';
import RowLoader from './Loader';
var useStyles = createUseStyles(function (theme) { return ({
    root: {
        background: '#fff'
    },
    stripedRow: {
        background: theme.colors.grey[100]
    },
    hasEndAdornment: {
        borderBottom: 0
    },
    cellEndAdornment: {
        paddingTop: 0,
        '&:empty': {
            padding: 0
        }
    },
    wrapperIconActions: {
        cursor: 'pointer',
        marginRight: -8,
        '& svg': {
            color: theme.colors.grey[600]
        }
    },
    fixed: {
        position: 'sticky',
        top: 0,
        right: 0,
        left: 0,
        background: theme.colors.grey[100]
    },
    rowCellCollapse: {
        padding: '10px 0'
    }
}); });
var Rows = React.memo(function (_a) {
    var currentItemCollapse = _a.currentItemCollapse, handleSetCurrentRow = _a.handleSetCurrentRow, handleClickCollapse = _a.handleClickCollapse, handleClickActions = _a.handleClickActions;
    var classes = useStyles();
    var _b = useTableContext(), loading = _b.loading, columns = _b.columns, rows = _b.rows, currentRow = _b.currentRow, actions = _b.actions, hasCollapseData = _b.hasCollapseData, hasColumnAction = _b.hasColumnAction, numberColumns = _b.numberColumns, stripedRows = _b.stripedRows;
    if (!loading && !(rows === null || rows === void 0 ? void 0 : rows.length)) {
        return _jsx(RowsEmpty, {}, void 0);
    }
    return (_jsxs(TableBody, { children: [loading && _jsx(RowLoader, {}, void 0), !loading &&
                (rows === null || rows === void 0 ? void 0 : rows.map(function (row, index) {
                    var _a = row.data, data = _a === void 0 ? null : _a, _b = row.cells, cells = _b === void 0 ? [] : _b, _c = row.collapse, collapse = _c === void 0 ? null : _c, className = row.className;
                    var isOdd = index % 2 === 1;
                    var rowProps = {
                        id: row === null || row === void 0 ? void 0 : row.id,
                        tabIndex: row === null || row === void 0 ? void 0 : row.tabIndex,
                        onClick: row === null || row === void 0 ? void 0 : row.onClick,
                        onDoubleClick: row === null || row === void 0 ? void 0 : row.onDoubleClick
                    };
                    var hasEndAdornment = !!(row === null || row === void 0 ? void 0 : row.endAdornment);
                    return (_jsxs(React.Fragment, { children: [_jsxs(TableRow, __assign({ hover: true, selected: currentRow && isEqual(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data, data), className: clsx(classes.root, stripedRows && isOdd && classes.stripedRow, className) }, rowProps, { children: [cells === null || cells === void 0 ? void 0 : cells.map(function (cell, i) {
                                        var _a;
                                        var currentIndex = i + 1;
                                        var isFixed = ((_a = columns[i]) === null || _a === void 0 ? void 0 : _a.fixed) && (currentIndex === 1 || currentIndex === numberColumns);
                                        return (_jsx(Cell, __assign({ fixed: isFixed, hasEndAdornment: hasEndAdornment }, cell), "row-" + index + "-cell-" + i));
                                    }), hasColumnAction && (_jsx(TableCell, __assign({ align: 'right', className: hasEndAdornment ? classes.hasEndAdornment : null }, { children: _jsx("div", __assign({ className: classes.wrapperIconActions }, { children: _jsx(ButtonIcon, __assign({ size: 'small', onClick: function (e) { return handleClickActions(e, data); } }, { children: _jsx(MoreHorizIcon, {}, void 0) }), void 0) }), void 0) }), void 0)), !hasColumnAction && actions && (_jsx(TableCell, __assign({ align: 'right', className: (actions === null || actions === void 0 ? void 0 : actions.fixed) ? classes.fixed : null }, { children: _jsx("div", __assign({ className: classes.wrapperIconActions }, { children: _jsx(ButtonIcon, __assign({ size: 'small', onClick: function (e) { return handleSetCurrentRow(e, row); } }, { children: _jsx(MoreHorizIcon, {}, void 0) }), void 0) }), void 0) }), void 0)), hasCollapseData && (_jsxs(_Fragment, { children: [!collapse && _jsx(TableCell, { className: classes.rowCellCollapse }, "row-" + index + "-collapse"), collapse && (_jsx(TableCell, __assign({ className: classes.rowCellCollapse }, { children: _jsx(IconButton, __assign({ size: 'small', onClick: function () { return handleClickCollapse(row); } }, { children: currentItemCollapse && isEqual(currentItemCollapse, data) ? (_jsx(KeyboardArrowUpIcon, {}, void 0)) : (_jsx(KeyboardArrowDownIcon, {}, void 0)) }), void 0) }), "row-" + index + "-collapse"))] }, void 0))] }), void 0), (row === null || row === void 0 ? void 0 : row.endAdornment) && (_jsx(TableRow, __assign({ className: clsx(classes.root, stripedRows && isOdd && classes.stripedRow) }, { children: _jsx(TableCell, __assign({ className: classes.cellEndAdornment, colSpan: numberColumns }, { children: row.endAdornment }), void 0) }), void 0)), collapse && _jsx(Collapse, { collapse: currentItemCollapse, row: row }, void 0)] }, "table-row-" + index));
                }))] }, void 0));
});
export default Rows;
