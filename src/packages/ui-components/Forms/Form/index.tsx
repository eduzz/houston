import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import IFormAdapter from '@eduzz/houston-core/formAdapter';

export interface IFormProps {
  context: IFormAdapter<any>;
  children?: React.ReactNode;
}

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: '100%'
    }
  })
);

export const FormFieldsContext = React.createContext<IFormAdapter<any>>(null);

const Form = React.memo<IFormProps>(({ children, context }) => {
  const classes = useStyles();

  return (
    <FormFieldsContext.Provider value={context}>
      <form className={classes.form} onSubmit={context.handleSubmit} onReset={context.handleReset}>
        {children}
      </form>
    </FormFieldsContext.Provider>
  );
});

export default Form;
