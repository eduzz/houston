import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { ToastContainer as ToastContainerToastify, Slide } from 'react-toastify';
import themeVariable from '../styles/ThemeProvider/_default/variables';
import styles from './styles';
var ToastContainer = function (props) {
    var styleContent = React.useMemo(function () { return ({
        __html: "\n        " + styles + "\n\n        .Toastify__toast {\n          border-radius: 4px;\n          margin-bottom: 16px;\n          padding: 8px 16px;\n        }\n\n        .Toastify__toast-body {\n          font-family: " + themeVariable.fontFamily + ";\n          font-weight: 600;\n          padding-right: 8px;\n          line-height: 1.45;\n        }\n\n        .Toastify__close-button {\n          align-self: center;\n        }\n      "
    }); }, []);
    return (_jsxs(_Fragment, { children: [_jsx("style", { dangerouslySetInnerHTML: styleContent }, void 0), _jsx(ToastContainerToastify, __assign({}, props, { transition: Slide, position: 'top-right', autoClose: 4000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, draggable: false, pauseOnFocusLoss: true, pauseOnHover: true, limit: 4 }), void 0)] }, void 0));
};
export default ToastContainer;
