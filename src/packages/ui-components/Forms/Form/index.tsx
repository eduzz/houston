import * as React from 'react';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

export interface IFormProps {
  context: IFormAdapter<any>;
  children?: React.ReactNode;
}

export const FormFieldsContext = React.createContext<IFormAdapter<any>>(null);

const Form = React.memo<IFormProps>(({ children, context }) => {
  return (
    <FormFieldsContext.Provider value={context}>
      <form onSubmit={context.handleSubmit} onReset={context.handleReset}>
        {children}
      </form>
    </FormFieldsContext.Provider>
  );
});

export default Form;
