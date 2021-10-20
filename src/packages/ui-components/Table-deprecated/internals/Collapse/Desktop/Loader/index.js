import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import createUseStyles from '../../../../../styles/createUseStyles';
var useStyles = createUseStyles({
    loader: { padding: 16 }
});
var LoaderCollapse = React.memo(function (_a) {
    var columns = _a.columns;
    var classes = useStyles();
    return (_jsx(TableRow, { children: _jsx(TableCell, __assign({ align: 'center', colSpan: columns }, { children: _jsx("div", __assign({ className: classes.loader }, { children: _jsx(CircularProgress, { size: '2rem' }, void 0) }), void 0) }), void 0) }, void 0));
});
export default LoaderCollapse;
