import * as React from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

export interface FormProps<T extends FieldValues> {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  context: UseFormReturn<T, any>;
  onSubmit: (data: any) => void | Promise<any>;
}

const Form = <T extends FieldValues>({ context, onSubmit, ...rest }: FormProps<T>) => {
  const handleReset = React.useCallback(() => context.reset(), [context]);

  return (
    <FormProvider {...context}>
      <form {...rest} onReset={handleReset} onSubmit={context.handleSubmit(onSubmit)} noValidate />
    </FormProvider>
  );
};

export default Form;
