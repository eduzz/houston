import React, { Fragment, memo } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Box from '@eduzz/houston-ui/Box';
import Button from '@eduzz/houston-ui/Button';

import Toolbar from 'components/Layout/Toolbar';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: '#cecece'
    }
  })
);

const BoxPage = memo(() => {
  const classes = useStyles();

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
              <Box
                xs={{ margin: '0', padding: '0' }}
                sm={{ margin: '0 12px', padding: '20px' }}
                md={{ margin: '0 12px', padding: '40px' }}
                lg={{ margin: '0 12px', padding: '60px' }}
                className={classes.root}
              >
                Success
              </Box>
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

export default BoxPage;
