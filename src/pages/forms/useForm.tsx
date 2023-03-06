import './locale';

import { useCallback } from 'react';
import {
  DefaultValues,
  useForm as useFormHook,
  UseFormProps,
  useFieldArray as useFieldArrayHook,
  UseFormReturn as HookUseFormReturn,
  FieldValues,
  UseFormReset
} from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Yup = typeof yup;

export interface UseFormParams<T extends FieldValues> extends UseFormProps<T> {
  /**
   * @deprecated Utilizar defaultValues
   */
  initialValues?: DefaultValues<T>;
  validationSchema?: yup.Schema<T> | ((yup: Yup) => yup.Schema<T>) | undefined;
}

export type FormModel<Form> = Form extends HookUseFormReturn<infer M> ? M : Form;

export interface UseFormReturn<T extends FieldValues> extends HookUseFormReturn<T, any> {
  setValues: UseFormReset<T>;
}

/**
 * Hook implemation of react-hook-form with Yup
 * @param UseFormParams
 */
export default function useForm<T extends FieldValues>({
  validationSchema,
  defaultValues,
  initialValues,
  ...params
}: UseFormParams<T>): UseFormReturn<T> {
  const hookParams = {
    ...params,
    defaultValues: defaultValues ?? initialValues
  };

  if (validationSchema) {
    Object.assign(hookParams, {
      resolver: yupResolver(typeof validationSchema === 'function' ? validationSchema(yup) : (validationSchema as any))
    });
  }

  const form = useFormHook<T>(hookParams);

  const setValues = useCallback<UseFormReset<T>>(
    (values, keepStateOptions = {}) => form.reset(values, { keepDefaultValues: true, ...keepStateOptions }),
    [form]
  );

  return { ...form, setValues };
}

export const useFieldArray = useFieldArrayHook;
