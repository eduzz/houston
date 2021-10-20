import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import createUseStyles from '../../../../../styles/createUseStyles';
import { useTableContext } from '../../../../context';
var useStyles = createUseStyles({
    loader: {
        padding: 16
    }
});
var RowLoader = React.memo(function () {
    var classes = useStyles();
    var numberColumns = useTableContext().numberColumns;
    return (_jsx(TableRow, { children: _jsx(TableCell, __assign({ align: 'center', colSpan: numberColumns }, { children: _jsx("div", __assign({ className: classes.loader }, { children: _jsx(CircularProgress, {}, void 0) }), void 0) }), void 0) }, void 0));
});
export default RowLoader;
