import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '../../Typography';
var LabelBase = function (_a) {
    var hasError = _a.hasError, label = _a.label, description = _a.description, errorMessage = _a.errorMessage;
    if (label && typeof label !== 'string') {
        return (_jsxs(_Fragment, { children: [label, hasError && _jsx(FormHelperText, __assign({ error: true }, { children: errorMessage }), void 0)] }, void 0));
    }
    return (_jsxs(_Fragment, { children: [label && _jsx(Typography, { children: label }, void 0), description && (_jsx(Typography, __assign({ size: 'x-small', fontWeight: 'regular' }, { children: description }), void 0)), hasError && _jsx(FormHelperText, __assign({ error: true }, { children: errorMessage }), void 0)] }, void 0));
};
export default React.memo(LabelBase);
