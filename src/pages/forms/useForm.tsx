import './locale';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  DefaultValues,
  useForm as useFormHook,
  UseFormProps,
  useFieldArray as useFieldArrayHook,
  UseFormReturn,
  FieldValues
} from 'react-hook-form';
import * as yup from 'yup';

type Yup = typeof yup;

export interface UseFormParams<T extends FieldValues> extends UseFormProps<T> {
  /**
   * @deprecated Utilizar defaultValues
   */
  initialValues?: DefaultValues<T>;
  validationSchema?: yup.SchemaOf<T> | ((yup: Yup) => yup.SchemaOf<T>) | undefined;
}

export type FormModel<Form> = Form extends UseFormReturn<infer M> ? M : Form;

/**
 * Hook implemation of react-hook-form with Yup
 * @param UseFormParams
 */
export default function useForm<T extends FieldValues>({
  validationSchema,
  defaultValues,
  initialValues,
  ...params
}: UseFormParams<T>) {
  const hookParams = {
    ...params,
    defaultValues: defaultValues ?? initialValues
  };

  if (validationSchema) {
    Object.assign(hookParams, {
      resolver: yupResolver(typeof validationSchema === 'function' ? validationSchema(yup) : (validationSchema as any))
    });
  }

  return useFormHook<T>(hookParams);
}

export const useFieldArray = useFieldArrayHook;
