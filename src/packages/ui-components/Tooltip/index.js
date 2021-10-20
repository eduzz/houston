import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react/no-children-prop */
import * as React from 'react';
import TooltipMUI from '@mui/material/Tooltip';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
var Tooltip = function (_a) {
    var _b = _a.placement, placement = _b === void 0 ? 'top' : _b, children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, className = _a.className, rest = __rest(_a, ["placement", "children", "disabled", "className"]);
    return (_jsx(TooltipMUI, __assign({}, rest, { disableTouchListener: disabled, disableHoverListener: disabled, disableFocusListener: disabled, placement: placement, arrow: true }, { children: _jsx(Content, { children: children, className: className }, void 0) }), void 0));
};
var Content = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    return (_jsx("div", __assign({ className: className }, rest, { ref: ref, style: { display: 'inline-flex' } }, { children: children }), void 0));
});
export default withHoustonTheme(React.memo(Tooltip));
