/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import * as React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import {
  useFormIsSubmitting,
  useFormValue,
  useFormError,
  useFormSetValue
} from '@eduzz/houston-forms/deprecated/context';
import { useFormContext as useFormContextDeprecated } from '@eduzz/houston-forms/deprecated/useForm';

export interface WithFormProps<R> {
  name?: string;
  errorMessage?: string;
  disabled?: boolean;
  genericRef?: R;
}

const withForm = <P extends WithFormProps<any>>(Component: React.ComponentType<P>) =>
  React.forwardRef<P['genericRef'], Omit<P, 'genericRef'>>(({ name, errorMessage, disabled, ...props }, ref) => {
    const form = useFormContext();
    const formDeprecated = useFormContextDeprecated();

    if ((!form && !formDeprecated) || !name) {
      return <Component {...(props as any)} name={name} errorMessage={errorMessage} ref={ref} />;
    }

    if (formDeprecated) {
      return withFormDeprecated(Component)({ name, errorMessage, disabled, ...props } as P, ref);
    }

    return (
      <Controller
        control={form.control}
        name={name}
        render={({ field, fieldState, formState }) => (
          <Component
            {...(props as any)}
            {...field}
            onBlur={(value: any, e: any) => {
              field.onBlur();
              (props as any)?.onBlur?.(value, e);
            }}
            disabled={disabled || formState?.isSubmitting}
            errorMessage={errorMessage ?? fieldState?.error?.message}
            ref={ref}
          />
        )}
      />
    );
  });

const withFormDeprecated =
  <P extends WithFormProps<any>>(Component: React.ComponentType<P>) =>
  (
    { name, value: valueProp, errorMessage: errorMessageProp, disabled, ...props }: P & { value?: any },
    ref: P['genericRef']
  ) => {
    const isSubmitting = useFormIsSubmitting();
    const value = useFormValue(name as string, valueProp);
    const errorMessage = useFormError(name as string, errorMessageProp);
    const setFormValue = useFormSetValue(name as string);

    const handleChange = React.useCallback((value: any) => setFormValue && setFormValue(value), [setFormValue]);

    return (
      <Component
        {...(props as any)}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled || isSubmitting}
        errorMessage={errorMessage}
        ref={ref}
      />
    );
  };
export default withForm;
