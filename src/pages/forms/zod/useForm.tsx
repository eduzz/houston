import './locale';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm as useFormHook,
  UseFormProps,
  UseFormReturn,
  useFieldArray as useFieldArrayHook
} from 'react-hook-form';
import { z } from 'zod';

type Zod = typeof z;

export interface UseFormParams<T> extends UseFormProps<T> {
  validationSchema: z.Schema<T> | ((z: Zod) => z.Schema<T>);
}

export type FormModel<T> = T extends UseFormReturn<infer M> ? M : T;

/**
 * Hook implemation of react-hook-form with Zod
 * @param UseFormParams
 */
export default function useForm<T>({ validationSchema, ...params }: UseFormParams<T>) {
  return useFormHook<T>({
    ...params,
    resolver: zodResolver(typeof validationSchema === 'function' ? validationSchema(z) : validationSchema)
  });
}

export const useFieldArray = useFieldArrayHook;
