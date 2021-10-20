import * as React from 'react';
import { StepperProps } from '@mui/material/Stepper';
interface IStep {
    label?: string;
    icon?: React.ReactNode;
    error?: boolean;
}
export declare type ProgressLinePropsExtends = 'id' | 'className';
export interface IProgressLineProps extends Pick<StepperProps, ProgressLinePropsExtends> {
    steps: IStep[];
    currentStep?: number;
}
declare const _default: React.FC<IProgressLineProps>;
export default _default;
