import * as React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

export interface FormProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  context: UseFormReturn<any, any>;
  onSubmit: (data: any) => void | Promise<any>;
}

const Form = ({ context, onSubmit, ...rest }: FormProps) => {
  const handleReset = React.useCallback(() => context.reset(), [context]);

  return (
    <FormProvider {...context}>
      <form {...rest} onReset={handleReset} onSubmit={context.handleSubmit(onSubmit)} noValidate />
    </FormProvider>
  );
};

export default Form;
