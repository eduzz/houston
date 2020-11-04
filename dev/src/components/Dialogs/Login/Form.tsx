import React, { memo, MouseEvent } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

import TextField from 'components/Shared/Fields/Text';
import { logError } from 'helpers/rxjs-operators/logError';
import { useFormikObservable } from 'hooks/useFormikObservable';
import authService from 'services/auth';
import * as yup from 'yup';

interface IProps {
  onRecoveryAccess: (e: MouseEvent<HTMLElement>) => void;
}

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required()
});

const useStyles = makeStyles(theme => ({
  buttons: {
    justifyContent: 'space-between'
  },
  socialButtons: {
    marginTop: theme.spacing(2)
  }
}));

const LoginDialogForm = memo((props: IProps) => {
  const classes = useStyles(props);

  const formik = useFormikObservable({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit(model) {
      return authService.login(model.email, model.password).pipe(logError(true));
    }
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Card>
        <CardContent>
          <TextField name='email' label='Email' type='email' formik={formik} />
          <TextField label='Senha' name='password' type='password' formik={formik} margin='none' />
        </CardContent>

        <CardActions className={classes.buttons}>
          <Button disabled={formik.isSubmitting} size='small' onClick={props.onRecoveryAccess}>
            Recuperar Acesso
          </Button>
          <Button disabled={formik.isSubmitting} color='primary' type='submit'>
            Entrar
          </Button>
        </CardActions>

        {formik.isSubmitting && <LinearProgress color='primary' />}
      </Card>
    </form>
  );
});
export default LoginDialogForm;
