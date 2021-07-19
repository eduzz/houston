import * as React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';

export interface ITableEmptyProps {
  count: number;
  children?: React.ReactNode;
}

const useStyle = createUseStyles({
  text: {
    opacity: 0.8,
    fontStyle: 'italic'
  }
});

const TableEmpty = React.memo<ITableEmptyProps>(({ children, count }) => {
  const columnsLen = useContextSelector(TableContext, context => context.columns.length);
  const classes = useStyle();

  if (count) return null;

  children = children ?? 'Nenhum dado encontrado';

  return (
    <TableRow className='table-empty-message'>
      <TableCell align='center' colSpan={columnsLen}>
        {typeof children === 'string' ? (
          <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className={classes.text}>
            {children}
          </Typography>
        ) : (
          children
        )}
      </TableCell>
    </TableRow>
  );
});

export default TableEmpty;
