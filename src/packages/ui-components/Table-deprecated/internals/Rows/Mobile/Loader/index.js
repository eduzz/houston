import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import createUseStyles from '../../../../../styles/createUseStyles';
var useStyles = createUseStyles(function () { return ({
    loader: {
        padding: 16,
        textAlign: 'center',
        width: '100%'
    }
}); });
var RowMobileLoader = React.memo(function () {
    var classes = useStyles();
    return (_jsx("div", __assign({ className: classes.loader }, { children: _jsx(CircularProgress, {}, void 0) }), void 0));
});
export default RowMobileLoader;
