import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';

import Button from '@eduzz/houston-ui/Button';
import ButtonIcon from '@eduzz/houston-ui/ButtonIcon';

import Toolbar from 'components/Layout/Toolbar';

import ButtonsVariantsExample from './Examples/Variants';

const FormsPage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Buttons' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Variants
          </Typography>

          <ButtonsVariantsExample />
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Disabled
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Button disabled>Primary (default)</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' disabled>
                Secondary
              </Button>
            </Grid>
            <Grid item>
              <Button variant='text' disabled>
                Text
              </Button>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Loading
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Button loading>Primary (default)</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' loading>
                Secondary
              </Button>
            </Grid>
            <Grid item>
              <Button variant='text' loading>
                Text
              </Button>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Full Width
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={true}>
              <Button fullWidth>Primary (default)</Button>
            </Grid>
            <Grid item xs={true}>
              <Button variant='outlined' fullWidth>
                Secondary
              </Button>
            </Grid>
            <Grid item xs={true}>
              <Button variant='text' fullWidth>
                Text
              </Button>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Icon
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Button startIcon={<SaveIcon />}>Start</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' endIcon={<SaveIcon />}>
                End
              </Button>
            </Grid>
            <Grid item>
              <Button variant='text' startIcon={<SaveIcon />} endIcon={<SaveIcon />}>
                Both
              </Button>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Icon Button
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <ButtonIcon>
                <SaveIcon />
              </ButtonIcon>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default FormsPage;
