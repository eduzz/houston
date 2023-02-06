/* eslint-disable sonarjs/cognitive-complexity */
import '../locale';

import { useCallback, useEffect, useRef } from 'react';

import { FormikConfig, FormikErrors, FormikHelpers, FormikTouched, useFormik } from 'formik';
import { Observable, of, Subject } from 'rxjs';
import { catchError, share, switchMap } from 'rxjs/operators';
import * as yup from 'yup';

import useObservable from '@eduzz/houston-hooks/useObservable';

import { useFormContext } from './context';
import FormAdapter from '../deprecated/formAdapter';

export declare type FormikInstance<Values = any> = ReturnType<typeof useForm> & {
  values: Partial<Values>;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
};

export declare type FormikConfigResolver<Values> = {
  [K in Exclude<keyof FormikConfig<Values>, 'onSubmit' | 'initialValues'>]?: FormikConfig<Values>[K];
};

type Yup = typeof yup;

export interface UseFormParams<Values> {
  validateOnMount?: boolean;
  initialValues?: Partial<Values>;
  validationSchema?: (yup: Yup) => any;
  onSubmitWithErrors?: (errors: FormikErrors<Partial<Values>>, values: Partial<Values>) => void;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Partial<Values>>) => void | Promise<any> | Observable<any>;
}

/**
 * Hook implemation of FormAdapter
 * @param UseFormParams
 */
export default function useForm<Values extends { [key: string]: any } = Record<string, never>>({
  onSubmit,
  onSubmitWithErrors,
  validationSchema,
  initialValues,
  validateOnMount = true
}: UseFormParams<Values>): FormAdapter<Values> {
  const promiseRef = useRef<{ promise?: Promise<any> }>({}).current;
  const handlers = useRef<{ [key: string]: (value: any) => void }>({}).current;

  const submitData = useRef(
    new Subject<{ model: Partial<Values>; formikHelpers: FormikHelpers<Partial<Values>> }>()
  ).current;
  const onSubmitRef = useRef<typeof onSubmit>(onSubmit);

  useObservable(() => {
    return submitData.pipe(
      switchMap(({ model, formikHelpers }) => {
        const result$ = onSubmitRef?.current?.(model as Values, formikHelpers);

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
      onSubmitRef.current = onSubmit;
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
        formik.setFieldValue(field, value, false);
      };
    }

    return handlers[field];
  }).current;

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => formik.handleSubmit(e), [formik]);

  const getFieldValue = useCallback((name: string) => formik.getFieldMeta(name).value, [formik]);

  const setFieldValue = useCallback((name: string, value: any) => {
    formik.setFieldTouched(name, true, false);
    formik.setFieldValue(name, value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFieldError = useCallback(
    (name: string) => {
      const field = formik.getFieldMeta(name);
      return field.touched || (formik.submitCount > 0 && !field.value) ? field.error : '';
    },
    [formik]
  );

  const setErrors = useCallback((errors: FormikErrors<Partial<Values>>) => formik.setErrors(errors), [formik]);

  return {
    handleSubmit,
    handleChange,
    handleReset: () => formik.resetForm({ values: initialValues }),
    setValues: formik.setValues,
    setErrors,
    getFieldValue,
    setFieldValue,
    getFieldError,
    setFieldTouched: formik.setFieldTouched,
    reset: values => formik.resetForm({ values: values === undefined ? initialValues : values }),
    initialValues: formik.initialValues,
    values: formik.values,
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
    errors: formik.errors
  };
}

export { useFormContext };
