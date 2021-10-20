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
var BaseRadioField = React.memo(function (_a) {
    var Control = _a.Control, label = _a.label, name = _a.name, description = _a.description, checked = _a.checked, errorMessageProp = _a.errorMessage, onChange = _a.onChange, margin = _a.margin, value = _a.value;
    var classes = useStyles();
    var isSubmitting = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.isSubmitting; });
    var formValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldValue(name); });
    var formError = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldError(name); });
    var setFieldValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.setFieldValue; });
    var isChecked = React.useMemo(function () { return (formValue ? String(formValue) === String(value) : checked); }, [checked, formValue, value]);
    var handleChange = React.useCallback(function (e, checked) {
        var isBooleanValue = ['true', 'false'].includes(e.target.value);
        setFieldValue && setFieldValue(name, isBooleanValue ? e.target.value === 'true' : e.target.value);
        onChange && onChange(e, checked);
    }, [setFieldValue, name, onChange]);
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : formError;
    var hasError = !!errorMessage;
    return (_jsx(FormControlLabel, { control: _jsx(Control, { disabled: isSubmitting, classes: { root: margin === 'none' && classes.marginDense }, checked: isChecked !== null && isChecked !== void 0 ? isChecked : false, onChange: handleChange, name: name, color: 'primary', value: value }, void 0), label: _jsx(LabelBase, { hasError: hasError, errorMessage: errorMessage, label: label, description: description }, void 0) }, void 0));
});
export default withHoustonTheme(React.memo(BaseRadioField));
