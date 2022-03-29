import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';

export interface ITableEmptyProps {
  count: number;
  children?: React.ReactNode;
}
const useStyles = createUseStyles(theme => ({
  text: {
    padding: theme.spacing(5)
  }
}));

const TableEmpty = React.memo<ITableEmptyProps>(({ children, count }) => {
  const classes = useStyles();

  const columnsLen = useContextSelector(TableContext, context => context.columns.length);

  if (count) return null;

  children = children ?? 'Nenhum dado encontrado';

  return (
    <tr className='table-empty-message'>
      <td align='center' colSpan={columnsLen}>
        {typeof children === 'string' ? (
          <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className={classes.text}>
            {children}
          </Typography>
        ) : (
          children
        )}
      </td>
    </tr>
  );
});

export default TableEmpty;
