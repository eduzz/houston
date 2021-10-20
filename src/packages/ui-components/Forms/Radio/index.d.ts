import * as React from 'react';
import { IRadioBaseFieldProps } from '../internals/RadioBase';
export interface IRadioFieldProps extends Omit<IRadioBaseFieldProps, 'Control' | 'isMultiple'> {
}
declare const RadioField: React.FC<IRadioFieldProps>;
export default RadioField;
