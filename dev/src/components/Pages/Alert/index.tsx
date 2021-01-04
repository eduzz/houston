import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Alert from '@eduzz/houston-ui/Alert';
import Button from '@eduzz/houston-ui/Button';

import Toolbar from 'components/Layout/Toolbar';

const AlertPage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Alert' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Variants
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Alert>Success</Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert type='info'>Info</Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert type='error'>Error</Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert type='warning'>Warning</Alert>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Examples
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Alert closable>Success, updated product!</Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert type='info' actions={[{ label: 'View', onClick: () => alert('click') }]}>
                New update!
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Alert title='Oops, error!' type='error'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error voluptates repellat
                blanditiis. Temporibus, ipsa. A nemo, molestias quae nam perspiciatis nisi aut delectus ex, amet ut
                numquam commodi quo.
              </Alert>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Button
            onClick={() =>
              window.open('https://github.com/eduzz/houston/tree/master/packages/ui-components/Alert', '_blank')
            }
          >
            Documentation
          </Button>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default AlertPage;
