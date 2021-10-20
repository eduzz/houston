import * as React from 'react';
import { ITextFieldProps } from '../Text';
declare type FieldTextPropsOmit = 'type' | 'multiline' | 'loading' | 'mask' | 'fieldEndAdornment';
export interface IPasswordFieldProps extends Omit<ITextFieldProps, FieldTextPropsOmit> {
}
declare const _default: React.NamedExoticComponent<IPasswordFieldProps>;
export default _default;
