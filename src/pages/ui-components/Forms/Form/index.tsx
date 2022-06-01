import * as React from 'react';

import IFormAdapter from '@eduzz/houston-core/formAdapter';
import FormContext from '@eduzz/houston-forms/context';

export interface IFormProps {
  id?: string;
  className?: string;
  context: IFormAdapter<any>;
  children?: React.ReactNode;
}

const Form: React.FC<IFormProps> = ({ context, ...rest }) => {
  return (
    <FormContext.Provider value={context}>
      <form {...rest} onReset={context.handleReset} onSubmit={context.handleSubmit} />
    </FormContext.Provider>
  );
};

export default React.memo(Form);
