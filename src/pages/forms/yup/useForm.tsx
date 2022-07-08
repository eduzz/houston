import './locale';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  DefaultValues,
  useForm as useFormHook,
  UseFormProps,
  useFieldArray as useFieldArrayHook
} from 'react-hook-form';
import * as yup from 'yup';

type Yup = typeof yup;

export interface IUseFormParams<T> extends UseFormProps<T> {
  /**
   * @deprecated Utilizar defaultValues
   */
  initialValues?: DefaultValues<T>;
  validationSchema: yup.AnyObjectSchema | ((yup: Yup) => yup.AnyObjectSchema);
}

/**
 * Hook implemation of react-hook-form with Yup
 * @param IUseFormParams
 */
export default function useForm<T>({ validationSchema, defaultValues, initialValues, ...params }: IUseFormParams<T>) {
  return useFormHook<T>({
    ...params,
    defaultValues: defaultValues ?? initialValues,
    resolver: yupResolver(typeof validationSchema === 'function' ? validationSchema(yup) : validationSchema)
  });
}

export const useFieldArray = useFieldArrayHook;
