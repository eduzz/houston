import * as React from 'react';
import { SelectChangeEvent, SelectProps } from '@mui/material/Select';
declare type FieldSelectPropsExtends = 'id' | 'label' | 'name' | 'disabled' | 'type' | 'fullWidth' | 'multiple' | 'className';
export interface ISelectFieldProps extends Pick<SelectProps, FieldSelectPropsExtends> {
    loading?: boolean;
    helperText?: string;
    errorMessage?: string;
    options?: ISelectFieldOption[];
    emptyOption?: string;
    maxLabelItems?: number;
    value?: any;
    onChange?: (value: any, event: SelectChangeEvent<{
        name?: string;
        value: any;
    }>) => any;
    margin?: 'none' | 'dense' | 'normal';
    size?: 'normal' | 'small';
}
export interface ISelectFieldOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
declare const _default: React.FC<ISelectFieldProps & React.RefAttributes<React.LegacyRef<HTMLSelectElement>>>;
export default _default;
