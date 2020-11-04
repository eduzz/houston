import React, { memo, MouseEvent } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import TextField from 'components/Shared/Fields/Text';
import Toast from 'components/Shared/Toast';
import { logError } from 'helpers/rxjs-operators/logError';
import { useFormikObservable } from 'hooks/useFormikObservable';
import { tap } from 'rxjs/operators';
import authService from 'services/auth';
import * as yup from 'yup';

interface IProps {
  onCancel: (e: MouseEvent<HTMLElement>) => void;
  onComplete: () => void;
}

const validationSchema = yup.object().shape({
  email: yup.string().required().email()
});

const useStyle = makeStyles({
  buttons: {
    justifyContent: 'space-between'
  }
});

const LoginDialogRecoveryAccess = memo((props: IProps) => {
  const classes = useStyle(props);

  const formik = useFormikObservable({
    initialValues: { email: '' },
    validationSchema,
    onSubmit(model) {
      return authService.sendResetPassword(model.email).pipe(
        tap(() => {
          Toast.show('Foi enviado um link para seu email para podermos recuperar seu acesso.');
          props.onComplete();
          formik.resetForm();
        }),
        logError(true)
      );
    }
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Card>
        <CardContent>
          <Typography gutterBottom>Iremos lhe enviar um email para recuperar seu acesso</Typography>

          <TextField label='Email' type='email' name='email' formik={formik} margin='none' />
        </CardContent>

        <CardActions className={classes.buttons}>
          <Button disabled={formik.isSubmitting} size='small' onClick={props.onCancel}>
            Voltar
          </Button>
          <Button disabled={formik.isSubmitting} color='primary' type='submit'>
            Enviar
          </Button>
        </CardActions>

        {formik.isSubmitting && <LinearProgress color='primary' />}
      </Card>
    </form>
  );
});

export default LoginDialogRecoveryAccess;
