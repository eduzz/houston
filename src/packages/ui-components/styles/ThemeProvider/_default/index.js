import { __assign } from "tslib";
/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme } from '@mui/material/styles';
import components from './components';
import typography from './typography';
import defaultThemeVariables from './variables';
export default function generateTheme(customTheme) {
    var _a;
    var palette = __assign(__assign({}, defaultThemeVariables.colors), ((_a = customTheme === null || customTheme === void 0 ? void 0 : customTheme.colors) !== null && _a !== void 0 ? _a : {}));
    return createTheme({
        palette: palette,
        components: components(palette),
        houston: __assign(__assign({}, defaultThemeVariables), { variables: customTheme === null || customTheme === void 0 ? void 0 : customTheme.variables, breakpoints: null, colors: palette }),
        typography: typography,
        spacing: function (factor) {
            return defaultThemeVariables.spacing(factor);
        }
    });
}
