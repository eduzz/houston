import './yupLocale';

import { useCallback, useEffect, useRef } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm as useFormHook } from 'react-hook-form';
import { Observable, of, Subject } from 'rxjs';
import { catchError, share, switchMap } from 'rxjs/operators';
import * as yup from 'yup';

import IFormAdapter from '@eduzz/houston-core/formAdapter';
import useObservable from '@eduzz/houston-hooks/useObservable';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const get = require('lodash/get');

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
  initialValues?: Partial<Values>;
  validationSchema?: (yup: Yup) => yup.AnyObjectSchema;
  onSubmitWithErrors?: (errors: FormikErrors<Values>, values: Partial<Values>) => void;
  onSubmit: (values: Values) => void | Promise<any> | Observable<any>;
}

/**
 * Hook implemation of IFormAdapter
 * @param IUseFormParams
 */
export default function useForm<Values = Record<string, never>>({
  onSubmit,
  onSubmitWithErrors,
  validationSchema,
  initialValues
}: IUseFormParams<Values>): IFormAdapter<Values> {
  const promiseRef = useRef<{ promise?: Promise<any> }>({}).current;
  const handlers = useRef<{ [key: string]: (value: any) => void }>({}).current;

  const submitData = useRef(new Subject<{ model: Partial<Values>; formikHelpers: FormikHelpers<Values> }>()).current;
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

  const {
    setValue,
    getFieldState,
    getValues,
    reset: formReset,
    handleSubmit: formHandleSubmit,
    formState: { submitCount, isValid, isSubmitting }
  } = useFormHook<Partial<Values>>({
    // validateOnMount,
    defaultValues: initialValues ?? ({} as any),
    resolver: validationSchema ? yupResolver(validationSchema(yup)) : null
    // onSubmit: (model, formikHelpers) => {
    //   onSubmitRef.current = onSubmit;
    //   submitData.next({ model, formikHelpers });
    //   return new Promise(resolve => setTimeout(() => resolve(promiseRef.promise), 500));
    // }
  });

  useEffect(() => {
    if (!submitCount || isValid) return;
    onSubmitWithErrors && onSubmitWithErrors(errors, formik.values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitCount]);

  const handleChange = useRef((field: string) => {
    if (!handlers[field]) {
      handlers[field] = (value: any) => {
        setValue(field as any, value, { shouldTouch: true, shouldDirty: true, shouldValidate: true });
      };
    }

    return handlers[field];
  }).current;

  const handleSubmit = useCallback(e => formHandleSubmit(onSubmit, onSubmitWithErrors)(e), [formHandleSubmit]);

  const getFieldValue = useCallback((name: string) => get(getValues(), name), [getValues]);
  const setFieldValue = useCallback(
    (name: string, value: any) => {
      setValue(name as any, value, { shouldTouch: true, shouldDirty: true, shouldValidate: true });
    },
    [setValue]
  );

  const getFieldError = useCallback(
    (name: string) => {
      const field = getFieldState(name as any);
      return field.isTouched || submitCount > 0 ? field.error?.message : '';
    },
    [getFieldState, submitCount]
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleReset = useCallback(() => formReset(initialValues as any), []);

  return {
    handleSubmit,
    handleChange,
    handleReset,
    getFieldValue: getFieldValue,
    setFieldValue: setFieldValue,
    getFieldError: getFieldError,
    reset: values => formReset(values === undefined ? initialValues : (values as any)),
    initialValues: initialValues,
    values: form.values,
    isSubmitting: isSubmitting,
    isValid: isValid,
    errors: errors
  };
}
