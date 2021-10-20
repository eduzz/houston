import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import IconButtonMUI from '@mui/material/IconButton';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
var Button = React.forwardRef(function (props, ref) {
    var children = props.children, _a = props.disabled, disabled = _a === void 0 ? false : _a, otherProps = __rest(props, ["children", "disabled"]);
    return (_jsx(IconButtonMUI, __assign({}, otherProps, { color: 'primary', disabled: disabled, disableTouchRipple: true, ref: ref }, { children: children }), void 0));
});
export default withHoustonTheme(React.memo(Button));
