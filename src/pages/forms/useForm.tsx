import './locale';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormHook, UseFormProps } from 'react-hook-form';
import { z } from 'zod';

type Zod = typeof z;

export interface IUseFormParams<T> extends UseFormProps<T> {
  validationSchema: z.Schema<T> | ((z: Zod) => z.Schema<T>);
}
// useForm(props?: UseFormProps<TFieldValues, TContext>): UseFormReturn<TFieldValues, TContext>

/**
 * Hook implemation of react-hook-form with Zod
 * @param IUseFormParams
 */
export default function useForm<T>({ validationSchema, ...params }: IUseFormParams<T>) {
  return useFormHook<T>({
    resolver: zodResolver(typeof validationSchema === 'function' ? validationSchema(z) : validationSchema),
    ...params
  });
}
