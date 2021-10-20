import * as React from 'react';
import { ICheckboxBaseFieldProps } from '../internals/CheckBoxBase';
export interface ICheckboxFieldProps extends Omit<ICheckboxBaseFieldProps, 'Control'> {
}
declare const CheckboxField: React.FC<ICheckboxFieldProps>;
export default CheckboxField;
