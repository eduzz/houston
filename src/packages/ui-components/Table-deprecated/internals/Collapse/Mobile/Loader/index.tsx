import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import createUseStyles from '../../../../../styles/createUseStyles';

const useStyles = createUseStyles({
  loader: {
    padding: 16,
    textAlign: 'center'
  }
});

const LoaderCollapseMobile = React.memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <CircularProgress size='2rem' />
    </div>
  );
});

export default LoaderCollapseMobile;
