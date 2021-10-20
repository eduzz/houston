import * as React from 'react';
import { SwitchProps } from '@mui/material/Switch';
declare type FieldSwitchPropsExtends = 'id' | 'className' | 'checked' | 'defaultChecked' | 'disabled' | 'size' | 'onChange';
export interface ISwitchFieldProps extends Pick<SwitchProps, FieldSwitchPropsExtends> {
    name?: string;
}
declare const _default: React.FC<ISwitchFieldProps & React.RefAttributes<React.LegacyRef<HTMLInputElement>>>;
export default _default;
