import * as React from 'react';
interface ICircularProgressProps {
    maxSteps: number;
    currentStep?: number;
    type?: 'numeric' | 'percentage';
    error?: boolean;
}
declare const _default: React.FC<ICircularProgressProps>;
export default _default;
