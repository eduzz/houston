import * as React from 'react';
import Radio, { RadioProps } from '@mui/material/Radio';
declare type FieldRadioPropsExtends = 'checked' | 'value' | 'onChange';
export interface IRadioBaseFieldProps extends Pick<RadioProps, FieldRadioPropsExtends> {
    Control: typeof Radio;
    label?: React.ReactNode;
    description?: string;
    name: string;
    errorMessage?: string;
    margin?: 'none' | 'normal';
}
declare const _default: React.FC<IRadioBaseFieldProps>;
export default _default;
