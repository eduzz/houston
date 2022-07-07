/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import * as React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

export interface WithFormProps<R> {
  name?: string;
  errorMessage?: string;
  disabled?: boolean;
  genericRef?: R;
}

const withForm = <P extends WithFormProps<any>>(Component: React.ComponentType<P>) =>
  React.forwardRef<P['genericRef'], Omit<P, 'genericRef'>>(({ name, errorMessage, disabled, ...props }, ref) => {
    const form = useFormContext();

    if (!form || !name) {
      return <Component {...(props as any)} name={name} errorMessage={errorMessage} ref={ref} />;
    }

    return (
      <Controller
        control={form.control}
        name={name}
        render={({ field, fieldState, formState }) => (
          <Component
            {...(props as any)}
            {...field}
            disabled={disabled || formState?.isSubmitting}
            errorMessage={errorMessage ?? fieldState?.error?.message}
            ref={ref}
          />
        )}
      />
    );
  });

export default withForm;
