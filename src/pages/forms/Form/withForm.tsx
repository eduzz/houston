import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Form as AntdForm } from 'antd';

export type WithFormProps<R> = {
  label?: string;
  name?: string;
  disabled?: boolean;
  _genericRef?: R;
  help?: React.ReactNode;
  error?: string;
};

const withForm = <P extends WithFormProps<any>>(Component: React.ComponentType<P>) =>
  React.forwardRef<P['_genericRef'], P>(({ name, disabled, label, help, error, ...props }, ref) => {
    const form = useFormContext();

    if (!form || !name) {
      return (
        <AntdForm.Item
          label={label}
          labelCol={{ span: 24 }}
          validateStatus={error ? 'error' : undefined}
          help={error ?? help}
        >
          <Component {...(props as any)} name={name} disabled={disabled} ref={ref} />
        </AntdForm.Item>
      );
    }

    return (
      <Controller
        control={form.control}
        name={name}
        render={({ field, fieldState, formState }) => (
          <AntdForm.Item
            label={label}
            labelCol={{ span: 24 }}
            validateStatus={fieldState?.error?.message ? 'error' : undefined}
            help={error ?? fieldState?.error?.message ?? help}
          >
            <Component
              {...(props as any)}
              {...field}
              onBlur={(value: any, e: any) => {
                field.onBlur();
                (props as any)?.onBlur?.(value, e);
              }}
              disabled={disabled || formState?.isSubmitting}
              ref={ref}
            />
          </AntdForm.Item>
        )}
      />
    );
  });

export default withForm;
