import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@eduzz/houston-ui/Button';

import Toolbar from 'components/Layout/Toolbar';

const DashboardIndexPage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Dashboard' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Buttons
          </Typography>

          <Button>Primary (default)</Button>
          <Button disabled>Primary (default)</Button>
          <Button variant='outlined'>Secondary</Button>
          <Button variant='outlined' disabled>
            Secondary
          </Button>
          <Button variant='text'>Text</Button>
          <Button variant='text' disabled>
            Text
          </Button>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default DashboardIndexPage;
