import { __assign, __read } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import useBoolean from '@eduzz/houston-hooks/useBoolean';
import TextField from '../Text';
var PasswordField = function (props) {
    var _a = __read(useBoolean(false), 2), showPassword = _a[0], toogleShowPassword = _a[1];
    return (_jsx(TextField, __assign({}, props, { type: showPassword ? 'text' : 'password', endAdornment: _jsx(IconButton, __assign({ size: 'small', onClick: toogleShowPassword }, { children: showPassword ? _jsx(Visibility, {}, void 0) : _jsx(VisibilityOff, {}, void 0) }), void 0) }), void 0));
};
export default React.memo(PasswordField);
