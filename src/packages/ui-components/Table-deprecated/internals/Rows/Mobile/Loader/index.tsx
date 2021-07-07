import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import createUseStyles from '../../../../../styles/createUseStyles';

const useStyles = createUseStyles(() => ({
  loader: {
    padding: 16,
    textAlign: 'center',
    width: '100%'
  }
}));

const RowMobileLoader = React.memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
});

export default RowMobileLoader;
