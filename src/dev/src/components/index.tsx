import React, { memo } from 'react';

import maskPhone from '@eduzz/houston-forms/masks/phone';
import useForm from '@eduzz/houston-forms/useForm';
import Button from '@eduzz/houston-ui/Button';
import Form from '@eduzz/houston-ui/Forms/Form';
import TextField from '@eduzz/houston-ui/Forms/Text';

const ComponentsDev = memo(() => {
  const form = useForm({
    initialValues: {},
    validationSchema: yup => {
      return yup.object().shape({
        name: yup.string().required(),
        description: yup.string()
      });
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <Form context={form}>
      <TextField label='Nome' name='name' placeholder='Insira seu nome' />
      <TextField label='Telefone' name='phone' placeholder='Insira seu telefone' mask={maskPhone} />
      <TextField label='Descrição' name='description' multiline placeholder='Insira sua descrição' />
      <Button type='submit' disabled={!form.isValid}>
        Enviar
      </Button>
    </Form>
  );
});

export default ComponentsDev;
