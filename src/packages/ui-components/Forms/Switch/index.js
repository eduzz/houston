import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import SwitchMUI from '@mui/material/Switch';
import { useContextSelector } from 'use-context-selector';
import withHoustonTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';
var Switch = React.forwardRef(function (_a, ref) {
    var name = _a.name, onChange = _a.onChange, props = __rest(_a, ["name", "onChange"]);
    var isSubmitting = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.isSubmitting; });
    var formValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.getFieldValue(name); });
    var setFieldValue = useContextSelector(FormFieldsContext, function (context) { return context === null || context === void 0 ? void 0 : context.setFieldValue; });
    if (!name && setFieldValue) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    var handleChange = React.useCallback(function (e, checked) {
        setFieldValue && setFieldValue(name, checked);
    }, [setFieldValue, name]);
    return (_jsx(SwitchMUI, __assign({ disabled: isSubmitting || props.disabled, name: name, inputRef: ref, onChange: onChange || handleChange, className: props.className, color: 'primary', checked: formValue !== null && formValue !== void 0 ? formValue : props.checked }, props), void 0));
});
export default withHoustonTheme(React.memo(Switch));
