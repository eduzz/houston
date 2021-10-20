import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import createGenerateClassName from '@material-ui/styles/createGenerateClassName';
import StylesProvider from '@material-ui/styles/StylesProvider';
import ThemeProvider from '.';
var generateClassName = createGenerateClassName({ disableGlobal: true });
var MuiV4Compat = React.memo(function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (_jsx(ThemeProvider, __assign({}, props, { children: _jsx(StylesProvider, __assign({ generateClassName: generateClassName }, { children: children }), void 0) }), void 0));
});
export default MuiV4Compat;
