import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { useContextSelector } from 'use-context-selector';
import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';
var useStyle = createUseStyles(function (theme) { return ({
    text: {
        padding: theme.spacing(5)
    }
}); });
var TableLoading = React.memo(function (_a) {
    var text = _a.text;
    var classes = useStyle();
    var isCollapseContent = useContextSelector(TableContext, function (context) { return context.isCollapseContent; });
    return (_jsx("tr", __assign({ className: 'table-loader' }, { children: _jsxs("td", __assign({ align: 'center', colSpan: 1000 }, { children: [!isCollapseContent && (_jsxs(_Fragment, { children: [_jsx(LinearProgress, {}, void 0), _jsx(Typography, __assign({ size: 'normal', fontWeight: 'regular', lineHeight: 'comfortable', className: classes.text }, { children: text }), void 0)] }, void 0)), isCollapseContent && (_jsx("div", __assign({ className: classes.text }, { children: _jsx(CircularProgress, { size: 32 }, void 0) }), void 0))] }), void 0) }), void 0));
});
export default TableLoading;
