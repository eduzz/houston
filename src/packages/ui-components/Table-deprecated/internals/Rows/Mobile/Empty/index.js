import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import createUseStyles from '../../../../../styles/createUseStyles';
import Typography from '../../../../../Typography';
import { useTableContext } from '../../../../context';
var useStyles = createUseStyles(function () { return ({
    empty: {
        padding: 16,
        textAlign: 'center',
        width: '100%'
    }
}); });
var RowsMobileEmpty = React.memo(function () {
    var classes = useStyles();
    var messages = useTableContext().messages;
    return (_jsx("div", __assign({ className: classes.empty }, { children: _jsx(Typography, __assign({ size: 'normal', fontWeight: 'regular', lineHeight: 'normal' }, { children: messages.empty }), void 0) }), void 0));
});
export default RowsMobileEmpty;
