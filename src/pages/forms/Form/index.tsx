import * as React from 'react';

import { Form as AntdForm } from 'antd';
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
      <AntdForm {...rest} onReset={handleReset} layout='vertical' onFinish={context.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default Form;
