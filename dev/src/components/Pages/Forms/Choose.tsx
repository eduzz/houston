import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useForm from '@eduzz/houston-forms/useForm';
import CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';
import RadioField from '@eduzz/houston-ui/Forms/Radio';

import Toolbar from 'components/Layout/Toolbar';

const FormChoosePage = memo(() => {
  const form = useForm({
    initialValues: {},
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
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Checkbox
          </Typography>

          <CheckboxField label='Label' description='Test of helper text' name='check' form={form} />
          <RadioField label='Label' description='Test of helper text' name='radio' form={form} />
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default FormChoosePage;
