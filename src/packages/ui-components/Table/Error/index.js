import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Button from '../../Button';
import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
var useStyle = createUseStyles(function (theme) { return ({
    text: {
        opacity: 0.8,
        fontStyle: 'italic',
        '& + button': { marginTop: theme.spacing(3) }
    }
}); });
var TableError = React.memo(function (_a) {
    var children = _a.children, error = _a.error, onRetry = _a.onRetry, formater = _a.formater;
    var classes = useStyle();
    var errorMessage = React.useMemo(function () {
        var _a;
        if (formater) {
            return (_a = formater(error)) !== null && _a !== void 0 ? _a : 'Algo inesperado aconteceu...';
        }
        return typeof error === 'string' ? error : 'Algo inesperado aconteceu...';
    }, [error, formater]);
    if (error)
        return null;
    children = children !== null && children !== void 0 ? children : errorMessage;
    return (_jsx("tr", __assign({ className: 'table-error-message' }, { children: _jsx("td", __assign({ align: 'center', colSpan: 1000 }, { children: typeof children === 'string' ? (_jsxs(_Fragment, { children: [_jsx(Typography, __assign({ size: 'normal', fontWeight: 'regular', lineHeight: 'comfortable', className: classes.text }, { children: children }), void 0), onRetry && (_jsx(Button, __assign({ variant: 'text', onClick: onRetry }, { children: "Tentar Novamente" }), void 0))] }, void 0)) : (children) }), void 0) }), void 0));
});
export default TableError;
