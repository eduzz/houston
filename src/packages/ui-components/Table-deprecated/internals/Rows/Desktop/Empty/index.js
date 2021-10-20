import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import createUseStyles from '../../../../../styles/createUseStyles';
import Typography from '../../../../../Typography';
import { useTableContext } from '../../../../context';
var useStyles = createUseStyles({
    empty: {
        padding: 16
    }
});
var RowsEmpty = React.memo(function () {
    var classes = useStyles();
    var _a = useTableContext(), messages = _a.messages, numberColumns = _a.numberColumns;
    return (_jsx(TableBody, { children: _jsx(TableRow, { children: _jsx(TableCell, __assign({ align: 'center', colSpan: numberColumns }, { children: _jsx("div", __assign({ className: classes.empty }, { children: _jsx(Typography, __assign({ size: 'normal', fontWeight: 'regular', lineHeight: 'normal' }, { children: messages.empty }), void 0) }), void 0) }), void 0) }, void 0) }, void 0));
});
export default RowsEmpty;
