import './yupLocale';
import { FormikConfig, FormikErrors, FormikHelpers, FormikTouched } from 'formik';
import { Observable } from 'rxjs';
import * as yup from 'yup';
import IFormAdapter from '@eduzz/houston-core/formAdapter';
export declare type FormikInstance<Values = any> = ReturnType<typeof useForm> & {
    values: Partial<Values>;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
};
export declare type FormikConfigResolver<Values> = {
    [K in Exclude<keyof FormikConfig<Values>, 'onSubmit' | 'initialValues'>]?: FormikConfig<Values>[K];
};
declare type Yup = typeof yup;
export interface IUseFormParams<Values> {
    validateOnMount?: boolean;
    initialValues?: Partial<Values>;
    validationSchema?: (yup: Yup) => any;
    onSubmitWithErrors?: (errors: FormikErrors<Values>, values: Partial<Values>) => void;
    onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any> | Observable<any>;
}
/**
 * Hook implemation of IFormAdapter
 * @param IUseFormParams
 */
export default function useForm<Values = Record<string, never>>({ onSubmit, onSubmitWithErrors, validationSchema, initialValues, validateOnMount }: IUseFormParams<Values>): IFormAdapter<Values>;
export {};
