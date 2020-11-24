import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import useForm from '@eduzz/houston-forms/useForm';
import Button from '@eduzz/houston-ui/Button';
import moneyMask from '@eduzz/houston-ui/Fields/masks/money';
import TextField from '@eduzz/houston-ui/Fields/Text';

import Toolbar from 'components/Layout/Toolbar';

const FormsPage = memo(() => {
  const form = useForm({
    initialValues: { money: 15 },
    validationSchema: yup =>
      yup.object().shape({
        name: yup.string().required(),
        money: yup.number().min(10)
      }),
    onSubmit: () => {
      return new Promise(resolve => {
        setTimeout(() => resolve(), 3000);
      });
    }
  });

  return (
    <Fragment>
      <Toolbar title='Formulários' />

      <form onSubmit={form.handleSubmit}>
        <Card>
          <CardContent>
            <TextField label='Name' name='name' form={form} />
            <TextField label='Money' name='money' form={form} mask={moneyMask} />
            <TextField label='TextArea' name='textarea' form={form} multiline />

            <Button type='submit' loading={form.isSubmitting}>
              Submit
            </Button>
          </CardContent>
        </Card>
      </form>
    </Fragment>
  );
});

export default FormsPage;
