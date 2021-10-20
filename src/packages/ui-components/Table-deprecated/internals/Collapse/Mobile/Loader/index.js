import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import createUseStyles from '../../../../../styles/createUseStyles';
var useStyles = createUseStyles({
    loader: {
        padding: 16,
        textAlign: 'center'
    }
});
var LoaderCollapseMobile = React.memo(function () {
    var classes = useStyles();
    return (_jsx("div", __assign({ className: classes.loader }, { children: _jsx(CircularProgress, { size: '2rem' }, void 0) }), void 0));
});
export default LoaderCollapseMobile;
