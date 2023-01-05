import * as React from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

import FormAdapter from './formAdapter';

const FormContext = createContext<FormAdapter<any> | null>(null);

export function useFormContext<T extends { [key: string]: any } = any>(): FormAdapter<T> | null {
  return useContextSelector(FormContext, context => context);
}

export function useFormValue(name: string, propValue?: any): any {
  const formValue = useContextSelector(FormContext, context => (name ? context?.getFieldValue(name) : null));
  return propValue ?? formValue;
}

export function useFormError(name: string, propError?: string): string | undefined {
  const formError = useContextSelector(FormContext, context => (name ? context?.getFieldError(name) : null));
  return propError ?? formError ?? undefined;
}

export function useFormIsSubmitting(): boolean | undefined {
  return useContextSelector(FormContext, context => context?.isSubmitting);
}

export function useFormSetValue(name: string): (value: any) => void {
  const contextSetFieldValue = useContextSelector(FormContext, context => {
    if (!name) return null;
    return context?.setFieldValue;
  });

  return React.useCallback(
    (value: any) => contextSetFieldValue && contextSetFieldValue(name, value),
    [contextSetFieldValue, name]
  );
}

export default FormContext;
