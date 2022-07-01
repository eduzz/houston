import * as React from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

const FormContext = createContext<IFormAdapter<any>>(null);

export function useFormContext<T = any>(): IFormAdapter<T> {
  return useContextSelector(FormContext, context => context);
}

export function useFormValue(name: string, propValue?: any): any {
  const formValue = useContextSelector(FormContext, context => (name ? context?.getFieldValue(name) : null));
  return propValue ?? formValue;
}

export function useFormError(name: string, propError?: string): string {
  const formError = useContextSelector(FormContext, context => (name ? context?.getFieldError(name) : null));
  return propError ?? formError;
}

export function useFormIsSubmitting(): boolean {
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

export function useFormRegister(): any {
  return useContextSelector(FormContext, context => context?.register);
}

export default FormContext;
