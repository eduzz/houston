import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';
import ButtonIcon from '../../../../ButtonIcon';
import Row from '../../../../Grid/Row';
import createUseStyles from '../../../../styles/createUseStyles';
import { useTableContext } from '../../../context';
import CellMobile from '../../Cell/Mobile';
import Collapse from '../../Collapse';
import RowsMobileEmpty from './Empty';
import RowMobileLoader from './Loader';
var useStyles = createUseStyles(function (theme) { return ({
    row: {
        background: theme.colors.grey[100],
        boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        display: 'flex',
        marginBottom: 8,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    rowContent: {
        padding: 12,
        width: '100%',
        '&.--hasActions': {
            width: 'calc(100% - 40px)',
            borderRight: "1px solid " + theme.colors.grey[200]
        },
        '&.--hasCollapse': {
            borderBottom: "1px solid " + theme.colors.grey[200]
        }
    },
    rowExtra: {
        width: 40,
        display: 'flex',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4px 0',
        '&.--hasCollapse': {
            justifyContent: 'space-between',
            borderBottom: "1px solid " + theme.colors.grey[200]
        },
        '& button': {
            color: theme.colors.grey[600],
            padding: 2,
            width: 32
        }
    }
}); });
var RowsMobile = React.memo(function (_a) {
    var currentItemCollapse = _a.currentItemCollapse, handleSetCurrentRow = _a.handleSetCurrentRow, handleClickCollapse = _a.handleClickCollapse, handleClickActions = _a.handleClickActions;
    var classes = useStyles();
    var _b = useTableContext(), loading = _b.loading, rows = _b.rows, actions = _b.actions, hasCollapseData = _b.hasCollapseData, hasColumnAction = _b.hasColumnAction;
    var hasActions = React.useMemo(function () { return actions || hasColumnAction; }, [actions, hasColumnAction]);
    if (!loading && !(rows === null || rows === void 0 ? void 0 : rows.length)) {
        return _jsx(RowsMobileEmpty, {}, void 0);
    }
    return (_jsxs(_Fragment, { children: [loading && _jsx(RowMobileLoader, {}, void 0), !loading &&
                (rows === null || rows === void 0 ? void 0 : rows.map(function (row, index) {
                    var hasCollapse = hasCollapseData && (row === null || row === void 0 ? void 0 : row.collapse);
                    var _a = row.data, data = _a === void 0 ? null : _a, _b = row.cells, cells = _b === void 0 ? [] : _b, _c = row.collapse, collapse = _c === void 0 ? null : _c, className = row.className;
                    var rowProps = {
                        id: row === null || row === void 0 ? void 0 : row.id,
                        tabIndex: row === null || row === void 0 ? void 0 : row.tabIndex,
                        onClick: row === null || row === void 0 ? void 0 : row.onClick,
                        onDoubleClick: row === null || row === void 0 ? void 0 : row.onDoubleClick
                    };
                    return (_jsx(React.Fragment, { children: _jsxs("div", __assign({ className: classes.row }, { children: [_jsx(Row, __assign({ spacing: 'compact', className: clsx(classes.rowContent, hasActions && '--hasActions', hasCollapse && '--hasCollapse', className) }, rowProps, { children: cells === null || cells === void 0 ? void 0 : cells.map(function (cell, i) { return (_jsx(CellMobile, __assign({ index: i }, cell), "row-mobile-" + index + "-cell-" + i)); }) }), void 0), hasActions && (_jsxs("div", __assign({ className: clsx(classes.rowExtra, hasCollapse && '--hasCollapse') }, { children: [hasCollapse && (_jsx(ButtonIcon, __assign({ size: 'small', onClick: function () { return handleClickCollapse(row); } }, { children: currentItemCollapse && isEqual(currentItemCollapse, data) ? (_jsx(KeyboardArrowUpIcon, {}, void 0)) : (_jsx(KeyboardArrowDownIcon, {}, void 0)) }), void 0)), hasColumnAction && (_jsx(ButtonIcon, __assign({ size: 'small', onClick: function (e) { return handleClickActions(e, data); } }, { children: _jsx(MoreHorizIcon, {}, void 0) }), void 0)), actions && (_jsx(ButtonIcon, __assign({ size: 'small', onClick: function (e) { return handleSetCurrentRow(e, row); } }, { children: _jsx(MoreHorizIcon, {}, void 0) }), void 0))] }), void 0)), collapse && _jsx(Collapse, { collapse: currentItemCollapse, row: row }, void 0)] }), void 0) }, "table-row-mobile-" + index));
                }))] }, void 0));
});
export default RowsMobile;
