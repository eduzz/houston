import * as React from 'react';

import { createContext, useContext } from 'use-context-selector';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

export interface IFormProps {
  id?: string;
  className?: string;
  context: IFormAdapter<any>;
  children?: React.ReactNode;
}

export const FormFieldsContext = createContext(null);

const Form: React.FC<IFormProps> = ({ context, ...rest }) => {
  return (
    <FormFieldsContext.Provider value={context}>
      <form {...rest} onReset={context.handleReset} onSubmit={context.handleSubmit} />
    </FormFieldsContext.Provider>
  );
};

export function useFormContext<T = any>() {
  return useContext<IFormAdapter<T>>(FormFieldsContext);
}

export default React.memo(Form);
