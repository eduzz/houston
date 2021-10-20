import * as React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
declare type FieldCheckboxPropsExtends = 'checked' | 'value' | 'onChange' | 'indeterminate' | 'disabled';
export interface ICheckboxBaseFieldProps extends Pick<CheckboxProps, FieldCheckboxPropsExtends> {
    Control: typeof Checkbox;
    label?: React.ReactNode;
    description?: string;
    name?: string;
    errorMessage?: string;
    isMultiple?: boolean;
    margin?: 'none' | 'normal';
}
declare const _default: React.FC<ICheckboxBaseFieldProps>;
export default _default;
