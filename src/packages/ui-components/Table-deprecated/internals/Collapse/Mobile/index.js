import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CollapseMUI from '@mui/material/Collapse';
import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';
import ButtonIcon from '../../../../ButtonIcon';
import Row from '../../../../Grid/Row';
import createUseStyles from '../../../../styles/createUseStyles';
import CellMobile from '../../Cell/Mobile';
import MenuActions from '../../MenuActions';
import { useCollapse } from '../context';
import LoaderCollapse from './Loader';
var useStyles = createUseStyles(function (theme) { return ({
    collapse: {
        background: theme.colors.grey[200],
        borderRadius: 4,
        width: '100%',
        transition: '0.15s linear',
        margin: '0 4px 0 4px',
        '&.--visibled': {
            margin: 4,
            padding: 4
        }
    },
    collapseRow: {},
    row: {
        display: 'flex',
        marginBottom: 4,
        flexDirection: 'row'
    },
    rowContent: {
        padding: 4,
        width: '100%',
        '&.--hasActions': {
            width: 'calc(100% - 40px)'
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
        '& button': {
            color: theme.colors.grey[500],
            padding: 2,
            width: 32
        }
    }
}); });
var CollapseMobile = React.memo(function () {
    var classes = useStyles();
    var _a = useCollapse(), row = _a.row, collapse = _a.collapse, handleSetCurrentRow = _a.handleSetCurrentRow, anchorEl = _a.anchorEl, handleCloseActions = _a.handleCloseActions, options = _a.options, currentRow = _a.currentRow;
    var _b = row === null || row === void 0 ? void 0 : row.collapse, _c = _b.loading, loading = _c === void 0 ? false : _c, _d = _b.actions, actions = _d === void 0 ? null : _d, _e = _b.rows, rows = _e === void 0 ? [] : _e, _f = _b.columns, columns = _f === void 0 ? [] : _f;
    var visibled = React.useMemo(function () { return !!(collapse && isEqual(collapse, row.data)); }, [collapse, row.data]);
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: clsx(classes.collapse, visibled && '--visibled') }, { children: _jsxs(CollapseMUI, __assign({ in: visibled, timeout: 350, unmountOnExit: true }, { children: [loading && _jsx(LoaderCollapse, {}, void 0), !loading &&
                            (rows === null || rows === void 0 ? void 0 : rows.map(function (row, index) {
                                var _a;
                                return (_jsxs("div", __assign({ className: classes.row }, { children: [_jsx(Row, __assign({ className: clsx(classes.rowContent, actions && '--hasActions'), spacing: 'compact', onClick: (row === null || row === void 0 ? void 0 : row.onClick) && row.onClick, onDoubleClick: (row === null || row === void 0 ? void 0 : row.onDoubleClick) && row.onDoubleClick }, { children: (_a = row === null || row === void 0 ? void 0 : row.cells) === null || _a === void 0 ? void 0 : _a.map(function (cell, i) { return (_jsx(CellMobile, __assign({ columns: columns, index: i }, cell), "row-mobile-" + index + "-cell-" + i)); }) }), void 0), actions && (_jsx("div", __assign({ className: classes.rowExtra }, { children: _jsx(ButtonIcon, __assign({ size: 'small', onClick: function (e) { return handleSetCurrentRow(e, row); } }, { children: _jsx(MoreHorizIcon, {}, void 0) }), void 0) }), void 0))] }), "collapse-mobile-row-" + index));
                            }))] }), void 0) }), void 0), _jsx(MenuActions, { anchorEl: anchorEl, onClose: handleCloseActions, options: !(options === null || options === void 0 ? void 0 : options.length) ? actions === null || actions === void 0 ? void 0 : actions.options : options, currentRow: currentRow }, void 0)] }, void 0));
});
export default CollapseMobile;
