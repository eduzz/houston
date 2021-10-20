import { __assign, __read } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import clsx from 'clsx';
import createUseStyles from '../../../styles/createUseStyles';
import { useTableContext } from '../../context';
var useStyles = createUseStyles(function (theme) { return ({
    fixed: {
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        background: theme.colors.grey[100],
        zIndex: 2
    },
    striped: {
        background: 'transparent'
    }
}); });
var Columns = React.memo(function () {
    var _a, _b, _c;
    var classes = useStyles();
    var _d = useTableContext(), loading = _d.loading, columns = _d.columns, actions = _d.actions, onSortable = _d.onSortable, rows = _d.rows, hasCollapseData = _d.hasCollapseData, numberColumns = _d.numberColumns, hasColumnAction = _d.hasColumnAction, stripedRows = _d.stripedRows, initialOrdenation = _d.initialOrdenation;
    var _e = __read(React.useState(initialOrdenation || null), 2), sortable = _e[0], setSortable = _e[1];
    var handleClickSortable = React.useCallback(function (field) {
        if ((sortable === null || sortable === void 0 ? void 0 : sortable.field) !== field) {
            setSortable({ field: field, order: 'asc' });
            onSortable && onSortable({ field: field, order: 'asc' });
            return;
        }
        if ((sortable === null || sortable === void 0 ? void 0 : sortable.field) === field && sortable.order === 'asc') {
            setSortable(__assign(__assign({}, sortable), { order: 'desc' }));
            onSortable && onSortable({ field: field, order: 'desc' });
            return;
        }
        setSortable(null);
        onSortable && onSortable(null);
    }, [sortable, onSortable]);
    var columnAction = React.useMemo(function () { return columns === null || columns === void 0 ? void 0 : columns.filter(function (c) { return (c === null || c === void 0 ? void 0 : c.type) === 'action'; }); }, [columns]);
    if (!(columns === null || columns === void 0 ? void 0 : columns.length)) {
        return null;
    }
    return (_jsx(TableHead, { children: _jsxs(TableRow, { children: [columns
                    .filter(function (c) { return (c === null || c === void 0 ? void 0 : c.type) !== 'action'; })
                    .map(function (column, index) {
                    var currentSortable = (sortable === null || sortable === void 0 ? void 0 : sortable.field) === column.field;
                    var currentIndex = index + 1;
                    var isFixed = (column === null || column === void 0 ? void 0 : column.fixed) && (currentIndex === 1 || currentIndex === numberColumns);
                    var label = (column === null || column === void 0 ? void 0 : column.label) || ' ';
                    return (_jsxs(TableCell, __assign({ id: column === null || column === void 0 ? void 0 : column.id, align: column === null || column === void 0 ? void 0 : column.align, className: clsx(isFixed && !loading && rows.length && classes.fixed, column === null || column === void 0 ? void 0 : column.className, stripedRows && classes.striped), sortDirection: currentSortable ? sortable === null || sortable === void 0 ? void 0 : sortable.order : false, width: column === null || column === void 0 ? void 0 : column.width }, { children: [(column === null || column === void 0 ? void 0 : column.sortable) && (_jsx(TableSortLabel, __assign({ active: currentSortable, disabled: loading || (rows === null || rows === void 0 ? void 0 : rows.length) === 0, direction: currentSortable ? sortable === null || sortable === void 0 ? void 0 : sortable.order : 'asc', onClick: (column === null || column === void 0 ? void 0 : column.sortable) ? function () { return handleClickSortable(column.field); } : null }, { children: label }), void 0)), !(column === null || column === void 0 ? void 0 : column.sortable) ? label : ' '] }), "column-" + column.field + "-" + index));
                }), hasColumnAction && (_jsxs(TableCell, __assign({ align: (_a = columnAction[0]) === null || _a === void 0 ? void 0 : _a.align, width: 50, className: stripedRows ? classes.striped : null }, { children: [((_b = columnAction[0]) === null || _b === void 0 ? void 0 : _b.label) === false && _jsx(_Fragment, { children: "\u00A0" }, void 0), !((_c = columnAction[0]) === null || _c === void 0 ? void 0 : _c.label) && columnAction[0].label !== false ? 'Ações' : columnAction[0].label] }), void 0)), !hasColumnAction && actions && (_jsxs(TableCell, __assign({ align: actions === null || actions === void 0 ? void 0 : actions.align, className: clsx((actions === null || actions === void 0 ? void 0 : actions.fixed) && classes.fixed, stripedRows && classes.striped), width: 50 }, { children: [(actions === null || actions === void 0 ? void 0 : actions.label) === false && _jsx(_Fragment, { children: "\u00A0" }, void 0), !(actions === null || actions === void 0 ? void 0 : actions.label) && actions.label !== false ? 'Ações' : actions.label] }), void 0)), hasCollapseData && _jsx(TableCell, { width: 50 }, void 0)] }, void 0) }, void 0));
});
export default Columns;
