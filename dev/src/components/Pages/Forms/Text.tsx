import React, { Fragment, memo } from 'react';
import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import cnpjMask from '@eduzz/houston-forms/masks/cnpj';
import cpfMask from '@eduzz/houston-forms/masks/cpf';
import documentMask from '@eduzz/houston-forms/masks/document';
import moneyMask from '@eduzz/houston-forms/masks/money';
import phoneMask from '@eduzz/houston-forms/masks/phone';
import zipcodeMask from '@eduzz/houston-forms/masks/zipcode';
import TextField from '@eduzz/houston-ui/Forms/Text';

import Toolbar from 'components/Layout/Toolbar';

const FormTextPage = memo(() => {
  const [text, setText] = useState('');

  const [money, setMoney] = useState();
  const [phone, setPhone] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [document, setDocument] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');

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
              <TextField label='Helper Text' helperText='A example of a helper text' value={text} onChange={setText} />
              <TextField label='Error' errorMessage='A example of an error message' value={text} onChange={setText} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <TextField label='Multine' value={text} onChange={setText} multiline />
              <TextField label='Multine' disabled value={text} onChange={setText} multiline />
              <TextField
                label='Error'
                errorMessage='A example of an error message'
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
              <TextField label='Money' name='money' value={money} onChange={setMoney} mask={moneyMask} />
              <TextField label='Phone' name='phone' value={phone} onChange={setPhone} mask={phoneMask} />
              <TextField label='Zipcode' name='zipcode' value={zipcode} onChange={setZipcode} mask={zipcodeMask} />
              <TextField label='Document' name='document' value={document} onChange={setDocument} mask={documentMask} />
              <TextField label='CNPJ' name='cnpj' value={cnpj} onChange={setCnpj} mask={cnpjMask} />
              <TextField label='CPF' name='cpf' value={cpf} onChange={setCpf} mask={cpfMask} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default FormTextPage;
