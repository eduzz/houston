import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-restricted-imports */
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import TextFieldMUI from '@mui/material/TextField';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';
import useMask from '../../hooks/useMask';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
var TextField = React.forwardRef(function (_a, ref) {
    var mask = _a.mask, value = _a.value, name = _a.name, loading = _a.loading, onChange = _a.onChange, onBlur = _a.onBlur, errorMessageProp = _a.errorMessage, fullWidth = _a.fullWidth, margin = _a.margin, endAdornment = _a.endAdornment, startAdornment = _a.startAdornment, maxLength = _a.maxLength, onPressEnter = _a.onPressEnter, className = _a.className, size = _a.size, InputProps = _a.InputProps, props = __rest(_a, ["mask", "value", "name", "loading", "onChange", "onBlur", "errorMessage", "fullWidth", "margin", "endAdornment", "startAdornment", "maxLength", "onPressEnter", "className", "size", "InputProps"]);
    var isSubmitting = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.isSubmitting; });
    var formValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldValue(name); });
    var formError = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldError(name); });
    var setFieldValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.setFieldValue; });
    if (!name && setFieldValue) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    value = formValue !== null && formValue !== void 0 ? formValue : value;
    var _b = useMask(mask, value), maskClean = _b.maskClean, maskedValue = _b.maskedValue;
    var handleChange = React.useCallback(function (e) {
        var cleanValue = maskClean(e.currentTarget.value);
        if (maxLength) {
            cleanValue = cleanValue.substring(0, maxLength);
        }
        onChange && onChange(cleanValue, e);
        setFieldValue && setFieldValue(name, cleanValue);
    }, [onChange, maskClean, setFieldValue, name, maxLength]);
    var handleBlur = React.useCallback(function (e) {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
    }, [onBlur, maskClean]);
    var inputLabelProps = React.useMemo(function () { return (__assign({}, (props.placeholder ? { shrink: true } : {}))); }, [props.placeholder]);
    var inputProps = React.useMemo(function () {
        var end = null;
        var start = null;
        if (endAdornment) {
            end = _jsx(InputAdornment, __assign({ position: 'end' }, { children: endAdornment }), void 0);
        }
        if (startAdornment) {
            start = _jsx(InputAdornment, __assign({ position: 'start' }, { children: startAdornment }), void 0);
        }
        if (loading) {
            end = (_jsx(InputAdornment, __assign({ position: 'end' }, { children: _jsx(CircularProgress, { color: 'secondary', size: 20 }, void 0) }), void 0));
        }
        return __assign(__assign({}, InputProps), { endAdornment: end, startAdornment: start });
    }, [endAdornment, startAdornment, loading, InputProps]);
    var handlePressEnter = React.useCallback(function (e) {
        var target = e.target;
        if (e.key === 'Enter') {
            e.preventDefault();
            onPressEnter(maskClean(target.value));
        }
    }, [onPressEnter, maskClean]);
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : formError;
    var hasError = !!errorMessage;
    return (_jsx(TextFieldMUI, __assign({ error: hasError, inputRef: ref }, props, { disabled: isSubmitting || props.disabled || loading, helperText: errorMessage || props.helperText, className: clsx(className, size === 'small' ? 'input-size-small' : null), name: name, margin: margin !== null && margin !== void 0 ? margin : 'normal', variant: 'outlined', value: maskedValue !== null && maskedValue !== void 0 ? maskedValue : '', onChange: handleChange, onBlur: handleBlur, fullWidth: fullWidth !== null && fullWidth !== void 0 ? fullWidth : true, InputLabelProps: inputLabelProps, InputProps: inputProps, onKeyPress: onPressEnter ? handlePressEnter : props.onKeyPress }), void 0));
});
export default withHoustonTheme(React.memo(TextField));
