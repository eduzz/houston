import * as React from 'react';

import { FormProvider, UseFormReturn } from 'react-hook-form';

export interface IFormProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  context: UseFormReturn<any, any>;
  onSubmit: (data: any) => void | Promise<any>;
}

const Form: React.FC<IFormProps> = ({ context, onSubmit, ...rest }) => {
  const handleReset = React.useCallback(() => context.reset(), [context]);

  return (
    <FormProvider {...context}>
      <form {...rest} onReset={handleReset} onSubmit={context.handleSubmit(onSubmit)} noValidate />
    </FormProvider>
  );
};

export default Form;
