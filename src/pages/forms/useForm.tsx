import './yupLocale';

import { useCallback, useMemo, useRef, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  DeepMap,
  DeepPartial,
  FieldError,
  SubmitErrorHandler,
  SubmitHandler,
  UnpackNestedValue,
  useForm as useFormHook
} from 'react-hook-form';
import * as yup from 'yup';

import IFormAdapter, { FormErrors } from '@eduzz/houston-core/formAdapter';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const get = require('lodash/get');

type Yup = typeof yup;

export interface IUseFormParams<Values> {
  initialValues?: Partial<Values>;
  validationSchema?: (yup: Yup) => yup.AnyObjectSchema;
  onSubmitWithErrors?: (errors: FormErrors<Values>, values: Partial<Values>) => void;
  onSubmit: (values: Values) => void | Promise<any>;
}

function formatHooksErrors<Values>(errors: DeepMap<DeepPartial<Values>, FieldError>): FormErrors<Values> {
  return Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: errors[key].message }), {} as FormErrors<Values>);
}

/**
 * Hook implemation of IFormAdapter
 * @param IUseFormParams
 */
export default function useForm<Values>({
  onSubmit: onSubmitProp,
  onSubmitWithErrors: onSubmitWithErrorsProp,
  validationSchema,
  initialValues: initialValuesProp
}: IUseFormParams<Values>): IFormAdapter<Values> {
  const handlers = useRef<{ [key: string]: (value: any) => void }>({}).current;
  const [initialValues] = useState<UnpackNestedValue<DeepPartial<Values>>>(() => initialValuesProp ?? ({} as any));

  const {
    setValue,
    getFieldState,
    getValues,
    register,
    reset: formReset,
    handleSubmit: formHandleSubmit,
    formState: { submitCount, isValid, isSubmitting, errors: errorsHooks }
  } = useFormHook<Values>({
    defaultValues: initialValues,
    resolver: validationSchema ? yupResolver(validationSchema(yup)) : null
  });

  const handleChange = useRef((field: string) => {
    if (!handlers[field]) {
      handlers[field] = (value: any) => {
        setValue(field as any, value, { shouldTouch: true, shouldDirty: true, shouldValidate: true });
      };
    }

    return handlers[field];
  }).current;

  const onSubmit: SubmitHandler<Values> = useCallback(values => onSubmitProp(values as Values), [onSubmitProp]);

  const onSubmitWithErrors: SubmitErrorHandler<Values> = useCallback(
    err => onSubmitWithErrorsProp(formatHooksErrors(err), getValues() as Values),
    [getValues, onSubmitWithErrorsProp]
  );

  const handleSubmit = useCallback(
    e => formHandleSubmit(onSubmit, onSubmitWithErrors)(e),
    [formHandleSubmit, onSubmit, onSubmitWithErrors]
  );

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

  const handleReset = useCallback(() => formReset(initialValues), [formReset, initialValues]);
  const reset = useCallback(
    (values?: Values) => formReset(values === undefined ? initialValues : (values as any)),
    [formReset, initialValues]
  );

  const errors = useMemo(() => formatHooksErrors(errorsHooks), [errorsHooks]);

  return {
    handleSubmit,
    handleChange,
    handleReset,
    getFieldValue,
    setFieldValue,
    getFieldError,
    register,
    reset,
    initialValues: initialValues as any,
    values: null, //form.values,
    isSubmitting,
    isValid,
    errors
  };
}
