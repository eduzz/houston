import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import Typography from '@eduzz/houston-ui/Typography';

import { useTableContext } from '../../../../context';

const useStyles = makeStyles(() =>
  createStyles({
    empty: {
      padding: 16,
      textAlign: 'center'
    }
  })
);

const RowsMobileEmpty = React.memo(() => {
  const classes = useStyles();
  const { messages } = useTableContext();

  return (
    <div className={classes.empty}>
      <Typography size='normal' fontWeight='regular' lineHeight='normal'>
        {messages.empty}
      </Typography>
    </div>
  );
});

export default RowsMobileEmpty;
