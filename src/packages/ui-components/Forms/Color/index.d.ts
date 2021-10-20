import * as React from 'react';
import { ITextFieldProps } from '../Text';
declare type FieldTextPropsOmit = 'type' | 'multiline' | 'mask' | 'value' | 'onChange' | 'onBlur' | 'maxLength';
export interface IColorFieldProps extends Omit<ITextFieldProps, FieldTextPropsOmit> {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare const _default: React.FC<IColorFieldProps>;
export default _default;
