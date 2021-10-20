import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { useContextSelector } from 'use-context-selector';
import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';
var useStyles = createUseStyles(function (theme) { return ({
    text: {
        padding: theme.spacing(5)
    }
}); });
var TableEmpty = React.memo(function (_a) {
    var children = _a.children, count = _a.count;
    var classes = useStyles();
    var columnsLen = useContextSelector(TableContext, function (context) { return context.columns.length; });
    if (count)
        return null;
    children = children !== null && children !== void 0 ? children : 'Nenhum dado encontrado';
    return (_jsx("tr", __assign({ className: 'table-empty-message' }, { children: _jsx("td", __assign({ align: 'center', colSpan: columnsLen }, { children: typeof children === 'string' ? (_jsx(Typography, __assign({ size: 'normal', fontWeight: 'regular', lineHeight: 'comfortable', className: classes.text }, { children: children }), void 0)) : (children) }), void 0) }), void 0));
});
export default TableEmpty;
