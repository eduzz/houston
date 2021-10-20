import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import createUseStyles from '../../styles/createUseStyles';
var useStyles = createUseStyles({
    column: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
    }
});
var Column = React.forwardRef(function (_a, ref) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var classes = useStyles();
    return _jsx(Grid, __assign({}, rest, { item: true, className: clsx(classes.column, className), ref: ref }), void 0);
});
export default React.memo(Column);
