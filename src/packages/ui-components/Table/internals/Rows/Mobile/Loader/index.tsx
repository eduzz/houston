import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    loader: {
      padding: 16,
      textAlign: 'center'
    }
  })
);

const RowMobileLoader = React.memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
});

export default RowMobileLoader;
