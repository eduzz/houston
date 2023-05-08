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

  // https://github.com/react-hook-form/react-hook-form/issues/10101
  const onSubmitFixer = React.useCallback(
    async (data: any) => {
      try {
        await onSubmit(data);
      } catch (err) {
        /// Ignorado
      }
    },
    [onSubmit]
  );

  return (
    <FormProvider {...context}>
      <form {...rest} onReset={handleReset} onSubmit={context.handleSubmit(onSubmitFixer)} noValidate />
    </FormProvider>
  );
};

export default Form;
