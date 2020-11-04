import React, { forwardRef, memo, useCallback } from 'react';
import { useObservable } from 'react-use-observable';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';
import makeStyles from '@material-ui/core/styles/makeStyles';

import TextField from 'components/Shared/Fields/Text';
import Toast from 'components/Shared/Toast';
import { logError } from 'helpers/rxjs-operators/logError';
import { useFormikObservable } from 'hooks/useFormikObservable';
import { tap } from 'rxjs/operators';
import authService from 'services/auth';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  currentPassword: yup.string().required(),
  newPassword: yup.string().required().min(5).max(25),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('newPassword'), null], 'Não confere')
});

const useStyle = makeStyles({
  content: {
    width: 400,
    maxWidth: 'calc(95vw - 50px)'
  }
});

const ChangePasswordDialog = memo((props: {}) => {
  const classes = useStyle(props);

  const [opened] = useObservable(() => {
    return authService.shouldOpenChangePassword().pipe(logError());
  }, []);

  const onCancel = useCallback(() => authService.closeChangePassword(), []);

  const formik = useFormikObservable({
    initialValues: { currentPassword: '', newPassword: '', confirmPassword: '' },
    validationSchema,
    onSubmit(model) {
      return authService.changePassword(model.currentPassword, model.newPassword).pipe(
        tap(() => {
          Toast.show('Senha alterada com sucesso!');
          authService.closeChangePassword();
        }),
        logError(true)
      );
    }
  });

  const handleExited = useCallback(() => {
    formik.resetForm();
  }, [formik]);

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={opened || false}
      onExited={handleExited}
      TransitionComponent={Transition}
    >
      {formik.isSubmitting && <LinearProgress color='primary' />}

      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Trocar Senha</DialogTitle>

        <DialogContent className={classes.content}>
          <TextField label='Senha Atual' type='password' name='currentPassword' formik={formik} />
          <TextField label='Nova senha' type='password' name='newPassword' formik={formik} />
          <TextField label='Repita a senha' type='password' name='confirmPassword' formik={formik} />
        </DialogContent>

        <DialogActions>
          <Button disabled={formik.isSubmitting} onClick={onCancel}>
            Cancelar
          </Button>
          <Button color='primary' type='submit' disabled={formik.isSubmitting}>
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
});

const Transition = memo(
  forwardRef((props: any, ref: any) => {
    return <Slide direction='up' {...props} ref={ref} />;
  })
);

export default ChangePasswordDialog;
