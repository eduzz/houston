import React, { Fragment, memo, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@eduzz/houston-ui/Button';
import moneyMask from '@eduzz/houston-ui/Forms/masks/money';
import TextField from '@eduzz/houston-ui/Forms/Text';

import Toolbar from 'components/Layout/Toolbar';

const DashboardIndexPage = memo(() => {
  const [text, setText] = useState<string>();
  const [money, setMoney] = useState<number>(15);

  return (
    <Fragment>
      <Toolbar title='Dashboard' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Fields
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <TextField label='Label' value={text} onChange={setText} fullWidth />
            </Grid>
            <Grid item>
              <TextField label='Label' placeholder='Placeholder' value={text} onChange={setText} fullWidth />
            </Grid>
            <Grid item>
              <TextField label='Label' placeholder='Placeholder' disabled value={text} onChange={setText} fullWidth />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                label='Helper'
                value={text}
                onChange={setText}
                helperText='This is the helper message'
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label='Error'
                value={text}
                onChange={setText}
                errorMessage='This is a custom error message'
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item>
              <TextField label='Money' value={money} onChange={setMoney} mask={moneyMask} />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item>
              <TextField label='TextArea' value={text} onChange={setText} multiline />
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant='h5'>
            Buttons
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Button>Primary (default)</Button>
            </Grid>
            <Grid item>
              <Button disabled>Primary (default)</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined'>Secondary</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' disabled>
                Secondary
              </Button>
            </Grid>
            <Grid item>
              <Button variant='text'>Text</Button>
            </Grid>
            <Grid item>
              <Button variant='text' disabled>
                Text
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default DashboardIndexPage;
