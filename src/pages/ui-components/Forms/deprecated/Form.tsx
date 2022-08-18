import * as React from 'react';

import FormContext from '@eduzz/houston-forms/deprecated/context';
import FormAdapter from '@eduzz/houston-forms/deprecated/formAdapter';

export interface FormProps {
  id?: string;
  className?: string;
  context: FormAdapter<any>;
  children?: React.ReactNode;
}

const Form = ({ context, ...rest }: FormProps) => {
  return (
    <FormContext.Provider value={context}>
      <form {...rest} onReset={context.handleReset} onSubmit={context.handleSubmit} />
    </FormContext.Provider>
  );
};

export default React.memo(Form);
