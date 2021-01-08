import React, { Fragment, memo, useCallback } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Button from '@eduzz/houston-ui/Button';
import Toast from '@eduzz/houston-ui/Toast';

import Toolbar from 'components/Layout/Toolbar';

const ToastPage = memo(() => {
  const handleShowToast = useCallback((type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        Toast.success('Example toast success');
        break;

      case 'error':
        Toast.error('Example toast error');
        break;

      default:
        Toast.info('Example toast info');
        Toast.info(
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus autem mollitia vero?'
        );
        break;
    }
  }, []);

  return (
    <Fragment>
      <Toolbar title='Toast' />

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Examples
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Button variant='outlined' onClick={() => handleShowToast('success')}>
                Success example
              </Button>
            </Grid>

            <Grid item>
              <Button variant='outlined' onClick={() => handleShowToast('error')}>
                Error example
              </Button>
            </Grid>

            <Grid item>
              <Button variant='outlined' onClick={() => handleShowToast('info')}>
                Info example
              </Button>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Button
            onClick={() =>
              window.open('https://github.com/eduzz/houston/tree/master/packages/ui-components/Toast', '_blank')
            }
          >
            Documentation
          </Button>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default ToastPage;
