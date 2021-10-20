import { __assign } from "tslib";
import { toast } from 'react-toastify';
var currentTheme;
export function _setCurrentTheme(theme) {
    currentTheme = theme;
}
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.success = function (content, options) {
        toast.success(content, __assign(__assign({}, options), { style: __assign({}, (currentTheme ? { background: currentTheme.palette.success.main } : {})) }));
    };
    Toast.error = function (content, options) {
        toast.error(content, __assign(__assign({}, options), { style: __assign({}, (currentTheme ? { background: currentTheme.palette.error.main } : {})) }));
    };
    Toast.info = function (content, options) {
        toast.info(content, __assign(__assign({}, options), { style: __assign({}, (currentTheme ? { background: currentTheme.palette.info.main } : {})) }));
    };
    return Toast;
}());
export default Toast;
