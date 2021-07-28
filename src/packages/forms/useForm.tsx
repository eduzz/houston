import './yupLocale';

import { useCallback, useEffect, useRef } from 'react';

import { FormikConfig, FormikErrors, FormikHelpers, FormikTouched, useFormik } from 'formik';
import { Observable, of, Subject } from 'rxjs';
import { catchError, share, switchMap } from 'rxjs/operators';
import * as yup from 'yup';

import IFormAdapter from '@eduzz/houston-core/formAdapter';
import useObservable from '@eduzz/houston-hooks/useObservable';

export declare type FormikInstance<Values = any> = ReturnType<typeof useForm> & {
  values: Partial<Values>;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
};

export declare type FormikConfigResolver<Values> = {
  [K in Exclude<keyof FormikConfig<Values>, 'onSubmit' | 'initialValues'>]?: FormikConfig<Values>[K];
};

type Yup = typeof yup;

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
export default function useForm<Values = Record<string, never>>({
  onSubmit,
  onSubmitWithErrors,
  validationSchema,
  initialValues,
  validateOnMount = true
}: IUseFormParams<Values>): IFormAdapter<Values> {
  const promiseRef = useRef<{ promise?: Promise<any> }>({}).current;
  const handlers = useRef<{ [key: string]: (value: any) => void }>({}).current;

  const submitData = useRef(new Subject<{ model: Partial<Values>; formikHelpers: FormikHelpers<Values> }>()).current;

  useObservable(() => {
    return submitData.pipe(
      switchMap(({ model, formikHelpers }) => {
        const result$ = onSubmit && onSubmit(model as Values, formikHelpers);

        const result = of(true).pipe(
          switchMap(() => (!result$ ? of(null) : result$)),
          catchError(() => of(null)),
          share()
        );

        promiseRef.promise = result.toPromise();

        return result;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik<Partial<Values>>({
    validateOnMount,
    initialValues: initialValues ?? {},
    validationSchema: validationSchema ? () => validationSchema(yup) : null,
    onSubmit: (model, formikHelpers) => {
      submitData.next({ model, formikHelpers });
      return new Promise(resolve => setTimeout(() => resolve(promiseRef.promise), 500));
    }
  });

  useEffect(() => {
    if (!formik.submitCount || formik.isValid) return;
    onSubmitWithErrors && onSubmitWithErrors(formik.errors, formik.values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.submitCount]);

  const handleChange = useRef((field: string) => {
    if (!handlers[field]) {
      handlers[field] = (value: any) => {
        formik.setFieldTouched(field, true, false);
        formik.setFieldValue(field, value, true);
      };
    }

    return handlers[field];
  }).current;

  const handleSubmit = useCallback(e => formik.handleSubmit(e), [formik]);

  const getFieldValue = useCallback((name: string) => formik.getFieldMeta(name).value, [formik]);

  const setFieldValue = useCallback((name: string, value: any) => {
    formik.setFieldTouched(name, true, false);
    formik.setFieldValue(name, value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFieldError = useCallback(
    (name: string) => (formik.touched[name] || formik.submitCount > 0 ? formik.getFieldMeta(name).error : ''),
    [formik]
  );

  return {
    handleSubmit,
    handleChange,
    handleReset: () => formik.resetForm({ values: initialValues }),
    setValues: formik.setValues,
    getFieldValue: getFieldValue,
    setFieldValue: setFieldValue,
    getFieldError: getFieldError,
    reset: values => formik.resetForm({ values: values === undefined ? initialValues : values }),
    initialValues: formik.initialValues,
    values: formik.values,
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
    errors: formik.errors
  };
}
