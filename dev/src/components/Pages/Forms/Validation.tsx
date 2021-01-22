import React, { Fragment, memo, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import moneyMask from '@eduzz/houston-forms/masks/money';
import useForm from '@eduzz/houston-forms/useForm';
import Button from '@eduzz/houston-ui/Button';
import Form from '@eduzz/houston-ui/Forms/Form';
import SelectField, { ISelectFieldOption } from '@eduzz/houston-ui/Forms/Select';
import TextField from '@eduzz/houston-ui/Forms/Text';

import Toolbar from 'components/Layout/Toolbar';

interface IModel {
  name: string;
  money: number;
  option: number;
  check: boolean;
}

const FormValidationPage = memo(() => {
  const [options] = useState<ISelectFieldOption[]>(() => [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3 (disabled)', disabled: true },
    { value: 4, label: 'Option 4' },
    { value: 5, label: 'Option 5' }
  ]);

  const form = useForm<IModel>({
    initialValues: { money: 5 },
    validationSchema: yup =>
      yup.object().shape({
        name: yup.string().required(),
        money: yup.number().min(10),
        option: yup.number().min(3),
        check: yup.bool().required().equals([true])
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
              <Grid item xs={12} sm={6} lg={4}></Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={4}>
                <SelectField label='Options' name='option' options={options} />
              </Grid>
              <Grid item xs={12} sm={6} lg={4}>
                <TextField label='Money' name='money' mask={moneyMask} />
              </Grid>
            </Grid>

            <Button type='submit' loading={form.isSubmitting}>
              Submit
            </Button>

            <Button variant='text' type='reset' loading={form.isSubmitting} onClick={form.handleReset}>
              Reset
            </Button>
          </CardContent>
        </Form>
      </Card>
    </Fragment>
  );
});

export default FormValidationPage;
