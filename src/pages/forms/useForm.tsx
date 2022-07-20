import './locale';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  DefaultValues,
  useForm as useFormHook,
  UseFormProps,
  useFieldArray as useFieldArrayHook,
  UseFormReturn
} from 'react-hook-form';
import * as yup from 'yup';

type Yup = typeof yup;

export interface UseFormParams<T> extends UseFormProps<T> {
  /**
   * @deprecated Utilizar defaultValues
   */
  initialValues?: DefaultValues<T>;
  validationSchema?: yup.AnyObjectSchema | ((yup: Yup) => yup.AnyObjectSchema) | undefined;
}

export type FormModel<Form> = Form extends UseFormReturn<infer M> ? M : Form;

/**
 * Hook implemation of react-hook-form with Yup
 * @param UseFormParams
 */
export default function useForm<T>({ validationSchema, defaultValues, initialValues, ...params }: UseFormParams<T>) {
  const hookParams = {
    ...params,
    defaultValues: defaultValues ?? initialValues
  };

  if (validationSchema) {
    Object.assign(hookParams, {
      resolver: yupResolver(typeof validationSchema === 'function' ? validationSchema(yup) : validationSchema)
    });
  }

  return useFormHook<T>(hookParams);
}

export const useFieldArray = useFieldArrayHook;
