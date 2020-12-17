import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import moneyMask from '@eduzz/houston-forms/masks/money';
import useForm from '@eduzz/houston-forms/useForm';
import Button from '@eduzz/houston-ui/Button';
import Form from '@eduzz/houston-ui/Forms/Form';
import TextField from '@eduzz/houston-ui/Forms/Text';

import Toolbar from 'components/Layout/Toolbar';

const FormValidationPage = memo(() => {
  const form = useForm({
    initialValues: { money: 5 },
    validationSchema: yup =>
      yup.object().shape({
        name: yup.string().required(),
        money: yup.number().min(10)
      }),
    onSubmit: () => {
      return new Promise(resolve => {
        setTimeout(() => resolve(null), 3000);
      });
    }
  });

  return (
    <Fragment>
      <Toolbar title='Formulários' />

      <Card>
        <Form context={form}>
          <CardContent>
            <Typography gutterBottom variant='h5'>
              Validation with Form Context
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={4}>
                <TextField label='Name' name='name' />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <TextField label='Money' name='money' mask={moneyMask} />
              </Grid>
            </Grid>

            <Button type='submit' loading={form.isSubmitting}>
              Submit
            </Button>
          </CardContent>
        </Form>
      </Card>
    </Fragment>
  );
});

export default FormValidationPage;
