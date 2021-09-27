import * as React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';

export interface ITableLoadingProps {
  text: React.ReactNode;
}

const useStyle = createUseStyles(theme => ({
  text: {
    padding: theme.spacing(5)
  }
}));

const TableLoading = React.memo<ITableLoadingProps>(({ text }) => {
  const classes = useStyle();

  return (
    <tr className='table-loader'>
      <td align='center' colSpan={1000}>
        <LinearProgress />

        <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className={classes.text}>
          {text}
        </Typography>
      </td>
    </tr>
  );
});

export default TableLoading;
