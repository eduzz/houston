import { __assign, __read, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import TextFieldMUI from '@mui/material/TextField';
import clsx from 'clsx';
import { HexColorPicker } from 'react-colorful';
import { useContextSelector } from 'use-context-selector';
import useOnClickOutside from '../../hooks/useClickOutside';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
import useStyles from './styles';
var ColorField = function (_a) {
    var className = _a.className, loading = _a.loading, value = _a.value, defaultValue = _a.defaultValue, endAdornment = _a.endAdornment, startAdornment = _a.startAdornment, InputProps = _a.InputProps, errorMessageProp = _a.errorMessage, fullWidth = _a.fullWidth, margin = _a.margin, name = _a.name, onChange = _a.onChange, size = _a.size, disabled = _a.disabled, props = __rest(_a, ["className", "loading", "value", "defaultValue", "endAdornment", "startAdornment", "InputProps", "errorMessage", "fullWidth", "margin", "name", "onChange", "size", "disabled"]);
    var classes = useStyles({ size: size });
    var pickerRef = React.useRef();
    var isSubmitting = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.isSubmitting; });
    var formValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldValue(name); });
    var formError = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldError(name); });
    var setFieldValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.setFieldValue; });
    if (!name && setFieldValue) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    value = formValue !== null && formValue !== void 0 ? formValue : value;
    var initialColor = value ? value : defaultValue !== null && defaultValue !== void 0 ? defaultValue : '';
    var _b = __read(React.useState(false), 2), visible = _b[0], setVisible = _b[1];
    var _c = __read(React.useState(initialColor), 2), color = _c[0], setColor = _c[1];
    var handleClickInput = React.useCallback(function () {
        if (!disabled && !loading) {
            setVisible(true);
        }
    }, [disabled, loading]);
    var handleClosePicker = React.useCallback(function () {
        if (visible) {
            setVisible(false);
        }
    }, [visible]);
    var handleChange = React.useCallback(function (value) {
        setColor(value);
        onChange && onChange(value);
        setFieldValue && setFieldValue(name, value);
    }, [name, onChange, setFieldValue]);
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
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : formError;
    var hasError = !!errorMessage;
    useOnClickOutside(pickerRef, handleClosePicker);
    return (_jsxs("div", __assign({ className: clsx(classes.root, className) }, { children: [_jsx(TextFieldMUI, __assign({ error: hasError }, props, { disabled: isSubmitting || disabled || loading, helperText: errorMessage || props.helperText, className: clsx(classes.input, size === 'small' && 'input-size-small', visible && '--active'), name: name, margin: margin !== null && margin !== void 0 ? margin : 'normal', variant: 'outlined', onClick: handleClickInput, value: color, fullWidth: fullWidth !== null && fullWidth !== void 0 ? fullWidth : true, InputLabelProps: inputLabelProps, InputProps: inputProps }), void 0), _jsx("div", __assign({ ref: pickerRef, className: clsx(classes.picker, visible && '--show') }, { children: _jsx(HexColorPicker, { color: color, onChange: handleChange }, void 0) }), void 0)] }), void 0));
};
export default withHoustonTheme(React.memo(ColorField));
