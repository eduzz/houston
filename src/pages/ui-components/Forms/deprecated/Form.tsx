import * as React from 'react';

import IFormAdapter from '@eduzz/houston-core/formAdapter';
import FormContext from '@eduzz/houston-forms/deprecated/context';

export interface FormProps {
  id?: string;
  className?: string;
  context: IFormAdapter<any>;
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
