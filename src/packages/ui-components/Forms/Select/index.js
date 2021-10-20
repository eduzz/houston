import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContextSelector } from 'use-context-selector';
import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
var useStyles = createUseStyles(function () { return ({
    endAdornment: {
        background: 'white',
        position: 'relative',
        zIndex: 1,
        right: -2
    }
}); });
var SelectField = React.forwardRef(function (_a, ref) {
    var label = _a.label, value = _a.value, name = _a.name, loading = _a.loading, onChange = _a.onChange, maxLabelItems = _a.maxLabelItems, errorMessageProp = _a.errorMessage, fullWidth = _a.fullWidth, options = _a.options, emptyOption = _a.emptyOption, helperText = _a.helperText, margin = _a.margin, size = _a.size, props = __rest(_a, ["label", "value", "name", "loading", "onChange", "maxLabelItems", "errorMessage", "fullWidth", "options", "emptyOption", "helperText", "margin", "size"]);
    var classes = useStyles();
    var isSubmitting = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.isSubmitting; });
    var formValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldValue(name); });
    var formError = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldError(name); });
    var setFieldValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.setFieldValue; });
    if (!name && setFieldValue) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    var endAdornment = React.useMemo(function () {
        return !loading ? null : (_jsx(InputAdornment, __assign({ position: 'end' }, { children: _jsx("div", __assign({ className: classes.endAdornment }, { children: _jsx(CircularProgress, { color: 'secondary', size: 20 }, void 0) }), void 0) }), void 0));
    }, [loading, classes.endAdornment]);
    var renderValue = React.useCallback(function (selected) {
        var _a;
        return !Array.isArray(selected)
            ? (_a = options.find(function (o) { return selected === o.value; })) === null || _a === void 0 ? void 0 : _a.label
            : selected.length > (maxLabelItems !== null && maxLabelItems !== void 0 ? maxLabelItems : 3)
                ? selected.length + " selecionados"
                : options
                    .filter(function (o) { return selected.includes(o.value); })
                    .map(function (o) { return o.label; })
                    .join(', ');
    }, [options, maxLabelItems]);
    var handleChange = React.useCallback(function (e) {
        var value = e.target.value;
        if (Array.isArray(value) && value.includes('')) {
            value = [];
        }
        onChange && onChange(value, e);
        setFieldValue && setFieldValue(name, value);
    }, [onChange, setFieldValue, name]);
    value = formValue !== null && formValue !== void 0 ? formValue : value;
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : formError;
    var hasError = !!errorMessage;
    var styles = React.useMemo(function () { return ({ select: size === 'small' ? 'input-size-small' : '' }); }, [size]);
    return (_jsxs(FormControl, __assign({ margin: margin !== null && margin !== void 0 ? margin : 'normal', fullWidth: fullWidth !== null && fullWidth !== void 0 ? fullWidth : true, error: !!errorMessage, variant: 'outlined' }, { children: [!!label && _jsx(InputLabel, __assign({ error: !!errorMessage }, { children: label }), void 0), !!label && (_jsx(InputLabel, __assign({ disabled: props.disabled || loading, error: !!errorMessage }, { children: label }), void 0)), _jsxs(Select, __assign({ error: hasError }, props, { classes: __assign({}, styles), inputRef: ref, disabled: isSubmitting || props.disabled || loading, name: name, value: value !== null && value !== void 0 ? value : (props.multiple ? [] : ''), onChange: handleChange, fullWidth: fullWidth !== null && fullWidth !== void 0 ? fullWidth : true, label: label, endAdornment: endAdornment, renderValue: renderValue }, { children: [emptyOption && (_jsx(MenuItem, __assign({ disabled: true, value: '' }, { children: emptyOption }), void 0)), (options || []).map(function (option) { return (_jsxs(MenuItem, __assign({ disabled: option.disabled, value: option.value }, { children: [props.multiple && _jsx(Checkbox, { checked: value === null || value === void 0 ? void 0 : value.includes(option.value) }, void 0), _jsx(ListItemText, { primary: option.label }, void 0)] }), "option-value-" + option.value)); })] }), void 0), !!(errorMessage || helperText) && (_jsx(FormHelperText, __assign({ error: !!errorMessage, variant: 'outlined' }, { children: errorMessage || helperText }), void 0))] }), void 0));
});
export default withHoustonTheme(React.memo(SelectField));
