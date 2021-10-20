import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContextSelector } from 'use-context-selector';
import createUseStyles from '../../styles/createUseStyles';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
import LabelBase from './LabelBase';
var useStyles = createUseStyles({
    marginDense: { padding: '0 8px' }
});
var CheckboxRadioField = function (_a) {
    var Control = _a.Control, label = _a.label, name = _a.name, description = _a.description, checked = _a.checked, value = _a.value, errorMessageProp = _a.errorMessage, isMultiple = _a.isMultiple, onChange = _a.onChange, margin = _a.margin, disabled = _a.disabled, indeterminate = _a.indeterminate;
    var classes = useStyles();
    var isSubmitting = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.isSubmitting; });
    var formValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldValue(name); });
    var formError = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldError(name); });
    var setFieldValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.setFieldValue; });
    if (!name && setFieldValue) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    var isChecked = React.useMemo(function () {
        if (isMultiple) {
            return (formValue !== null && formValue !== void 0 ? formValue : []).includes(value);
        }
        return formValue === true || checked;
    }, [checked, formValue, isMultiple, value]);
    var handleChange = React.useCallback(function (e, checked) {
        if (!isMultiple) {
            setFieldValue && setFieldValue(name, checked);
            onChange && onChange(e, checked);
            return;
        }
        var setValue = new Set(formValue !== null && formValue !== void 0 ? formValue : []);
        if (checked) {
            setValue.add(value);
        }
        else {
            setValue.delete(value);
        }
        setFieldValue && setFieldValue(name, Array.from(setValue));
    }, [formValue, isMultiple, name, onChange, setFieldValue, value]);
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : formError;
    var hasError = !!errorMessage;
    return (_jsx(FormControlLabel, { control: _jsx(Control, { indeterminate: indeterminate, disabled: isSubmitting || disabled, classes: { root: margin === 'none' && classes.marginDense }, checked: isChecked !== null && isChecked !== void 0 ? isChecked : false, defaultValue: '', onChange: handleChange, name: name, color: 'primary' }, void 0), label: _jsx(LabelBase, { hasError: hasError, errorMessage: errorMessage, label: label, description: description }, void 0) }, void 0));
};
export default withHoustonTheme(React.memo(CheckboxRadioField));
