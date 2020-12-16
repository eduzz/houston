import React, { Fragment, memo } from 'react';
import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useForm from '@eduzz/houston-forms/useForm';
import Button from '@eduzz/houston-ui/Button';
import CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';
import Form from '@eduzz/houston-ui/Forms/Form';
import cnpjMask from '@eduzz/houston-ui/Forms/masks/cnpj';
import cpfMask from '@eduzz/houston-ui/Forms/masks/cpf';
import documentMask from '@eduzz/houston-ui/Forms/masks/document';
import moneyMask from '@eduzz/houston-ui/Forms/masks/money';
import phoneMask from '@eduzz/houston-ui/Forms/masks/phone';
import zipcodeMask from '@eduzz/houston-ui/Forms/masks/zipcode';
import RadioField from '@eduzz/houston-ui/Forms/Radio';
import TextField from '@eduzz/houston-ui/Forms/Text';

import Toolbar from 'components/Layout/Toolbar';

const FormsPage = memo(() => {
  const [text, setText] = useState('');

  const masksForm = useForm({
    onSubmit: () => {}
  });

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
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Types
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField label='Label' value={text} onChange={setText} />
              <TextField label='Label' placeholder='Placeholder' value={text} onChange={setText} />
              <TextField label='Disabled' disabled value='Value' />
              <TextField label='Loading' loading value={text} onChange={setText} />
              <TextField label='Helper Text' helperText='A exampe of a helper text' value={text} onChange={setText} />
              <TextField label='Error' errorMessage='A exampe of an error message' value={text} onChange={setText} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField label='Multine' value={text} onChange={setText} multiline />
              <TextField label='Multine' disabled value={text} onChange={setText} multiline />
              <TextField
                label='Error'
                errorMessage='A exampe of an error message'
                value={text}
                onChange={setText}
                multiline
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Masks
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField label='Money' name='money' form={masksForm} mask={moneyMask} />
              <TextField label='Phone' name='phone' form={masksForm} mask={phoneMask} />
              <TextField label='Zipcode' name='zipcode' form={masksForm} mask={zipcodeMask} />
              <TextField label='Document' name='document' form={masksForm} mask={documentMask} />
              <TextField label='CNPJ' name='cnpj' form={masksForm} mask={cnpjMask} />
              <TextField label='CPF' name='cpf' form={masksForm} mask={cpfMask} />
            </Grid>
          </Grid>
        </CardContent>

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

export default FormsPage;
