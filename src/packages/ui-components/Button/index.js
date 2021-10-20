import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import ButtonMUI from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
var Button = function (_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? 'contained' : _c, startIcon = _a.startIcon, _d = _a.loading, loading = _d === void 0 ? false : _d, loadingText = _a.loadingText, rest = __rest(_a, ["children", "disabled", "variant", "startIcon", "loading", "loadingText"]);
    return (_jsxs(ButtonMUI, __assign({}, rest, { disabled: disabled || loading, startIcon: loading ? _jsx(CircularProgress, { size: 18, color: 'inherit' }, void 0) : startIcon, disableRipple: true, disableFocusRipple: true, disableElevation: true, disableTouchRipple: true, variant: variant, color: 'primary' }, { children: [!loading && children, loading && (loadingText !== null && loadingText !== void 0 ? loadingText : children)] }), void 0));
};
export default withHoustonTheme(React.memo(Button));
