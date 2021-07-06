import * as React from 'react';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

import createUseStyles from '../../styles/createUseStyles';

export interface IFormProps {
  context: IFormAdapter<any>;
  children?: React.ReactNode;
}

const useStyles = createUseStyles({
  form: { width: '100%' }
});

export const FormFieldsContext = React.createContext<IFormAdapter<any>>(null);

const Form: React.FC<IFormProps> = ({ children, context }) => {
  const classes = useStyles();

  return (
    <FormFieldsContext.Provider value={context}>
      <form className={classes.form} onSubmit={context.handleSubmit} onReset={context.handleReset}>
        {children}
      </form>
    </FormFieldsContext.Provider>
  );
};

export default React.memo(Form);
