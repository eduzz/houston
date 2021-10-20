import * as React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import IFormMask from '@eduzz/houston-core/maskAdapter';
declare type FieldTextPropsExtends = 'id' | 'label' | 'name' | 'disabled' | 'placeholder' | 'type' | 'fullWidth' | 'required' | 'helperText' | 'multiline' | 'rows' | 'className' | 'onKeyPress' | 'onKeyUp' | 'onKeyDown' | 'onClick' | 'inputRef' | 'InputProps' | 'value';
export interface ITextFieldProps extends Pick<TextFieldProps, FieldTextPropsExtends> {
    loading?: boolean;
    errorMessage?: string;
    mask?: IFormMask;
    onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
    onBlur?: (value: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
    margin?: 'none' | 'dense' | 'normal';
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
    onPressEnter?: (value: any) => any;
    maxLength?: number;
    size?: 'normal' | 'small';
}
declare const _default: React.FC<ITextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
