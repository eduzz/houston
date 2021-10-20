import * as React from 'react';
import { ITextFieldProps } from '../Text';
declare type IOmitTextFieldProps = 'mask' | 'endAdornment' | 'maxLength' | 'onChange' | 'value' | 'onBlur' | 'rows' | 'type' | 'multiline';
export declare type IDatePickerView = 'month' | 'year' | 'decade' | 'century';
export declare type IDateFormat = 'dd/MM/yyyy' | 'MM/dd/yyyy' | 'yyyy-MM-dd' | 'dd-MM-yyyy' | string;
export declare type IDatePickerChange = (value: Date, event: React.ChangeEvent<HTMLInputElement>) => void;
export interface IDatePickerProps extends Omit<ITextFieldProps, IOmitTextFieldProps> {
    loading?: boolean;
    errorMessage?: string;
    margin?: 'none' | 'dense' | 'normal';
    size?: 'normal' | 'small';
    value?: Date;
    width?: number;
    displayFormat?: IDateFormat;
    locale?: string;
    defaultView?: IDatePickerView;
    maxDate?: Date;
    minDate?: Date;
    onChange?: IDatePickerChange;
    onCalendarClose?: () => void;
    onCalendarOpen?: () => void;
}
declare const _default: React.FC<IDatePickerProps>;
export default _default;
