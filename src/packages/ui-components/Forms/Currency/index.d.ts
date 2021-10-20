import * as React from 'react';
import { ITextFieldProps } from '../Text';
declare type IOmitProps = 'mask' | 'multiline' | 'maxLength' | 'rows';
export interface ICurrencyProps extends Omit<ITextFieldProps, IOmitProps> {
}
declare const CurrencyField: React.FC<ICurrencyProps>;
export default CurrencyField;
