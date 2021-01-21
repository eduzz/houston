import React, { Fragment, memo } from 'react';
import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SelectField, { ISelectFieldOption } from '@eduzz/houston-ui/Forms/Select';

import Toolbar from 'components/Layout/Toolbar';

const FormSelectPage = memo(() => {
  const [text, setText] = useState('');

  const [options] = useState<ISelectFieldOption[]>(() => [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3 (disabled)', disabled: true }
  ]);

  return (
    <Fragment>
      <Toolbar title='Formulários' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Select
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <SelectField label='Label' emptyOption='Selecione...' options={options} value={text} onChange={setText} />
              <SelectField label='Label' options={options} disabled value={text} onChange={setText} />
              <SelectField label='Label' options={options} loading value={text} onChange={setText} />

              <SelectField
                label='Label'
                helperText='A example of a helper text'
                options={options}
                disabled
                value={text}
                onChange={setText}
              />
              <SelectField
                label='Label'
                errorMessage='A example of an error message'
                options={options}
                value={text}
                onChange={setText}
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Select Multiple
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <SelectField
                label='Label'
                multiple
                emptyOption='Selecione...'
                options={options}
                value={text}
                onChange={setText}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default FormSelectPage;
