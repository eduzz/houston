import React, { memo } from 'react';

import Grid from '@material-ui/core/Grid';

import Button from '@eduzz/houston-ui/Button';

const ButtonsVariantsExample = memo(() => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button>Primary (default)</Button>
      </Grid>
      <Grid item>
        <Button variant='outlined'>Secondary</Button>
      </Grid>
      <Grid item>
        <Button variant='text'>Text</Button>
      </Grid>
    </Grid>
  );
});

export default ButtonsVariantsExample;
