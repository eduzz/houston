import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { _setCurrentTheme } from '../../Toast';
import ToastContainer from '../../Toast/Container';
import generateTheme from './_default';
import defaultThemeVariables from './_default/variables';
import ContextTheme from './context';
function ThemeProvider(_a) {
    var children = _a.children, theme = _a.theme, disableCssBaseline = _a.disableCssBaseline, disabledFontBase = _a.disabledFontBase;
    var muiTheme = React.useMemo(function () { return generateTheme(theme); }, [theme]);
    var fontBaseBody = React.useMemo(function () {
        return !disabledFontBase &&
            "\n        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700');\n\n        body {\n          font-family: " + defaultThemeVariables.fontFamily + ";\n          font-size: " + defaultThemeVariables.textSize('default') + "px;\n        }\n      ";
    }, [disabledFontBase]);
    var styleContent = React.useMemo(function () { return ({
        __html: "\n        form {\n          width: 100%;\n        }\n\n        .houston-icon {\n          line-height: 0;\n        }\n\n        " + fontBaseBody + "\n      "
    }); }, [fontBaseBody]);
    React.useEffect(function () { return _setCurrentTheme(muiTheme); }, [muiTheme]);
    return (_jsx(StyledEngineProvider, __assign({ injectFirst: true }, { children: _jsxs(MUIThemeProvider, __assign({ theme: muiTheme }, { children: [_jsx("style", { dangerouslySetInnerHTML: styleContent }, void 0), _jsxs(ContextTheme.Provider, __assign({ value: muiTheme }, { children: [_jsx(ToastContainer, {}, void 0), !disableCssBaseline && _jsx(CssBaseline, {}, void 0), children] }), void 0)] }), void 0) }), void 0));
}
export default React.memo(ThemeProvider);
