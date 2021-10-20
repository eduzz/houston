import * as React from 'react';

import createUseStyles from '../../../../../styles/createUseStyles';
import Typography from '../../../../../Typography';
import { useTableContext } from '../../../../context';

const useStyles = createUseStyles(() => ({
  empty: {
    padding: 16,
    textAlign: 'center',
    width: '100%'
  }
}));

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
