import * as React from 'react';
import IFormAdapter from '@eduzz/houston-core/formAdapter';
export interface IFormProps {
    id?: string;
    className?: string;
    context: IFormAdapter<any>;
    children?: React.ReactNode;
}
export declare const FormFieldsContext: import("use-context-selector").Context<any>;
export declare function useFormContext<T = any>(): IFormAdapter<T>;
declare const _default: React.NamedExoticComponent<IFormProps>;
export default _default;
