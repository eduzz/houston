import * as React from 'react';
interface IStepIconProps {
    icon: React.ReactNode;
    active: boolean;
    completed: boolean;
    error: boolean;
}
declare const StepIcon: React.FC<IStepIconProps>;
export default StepIcon;
