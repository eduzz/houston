import * as React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
  const context = React.useContext(TableContext);
  const classes = useStyle();

  if (count) return null;

  children = children ?? 'Nenhum dado encontrado';

  return (
    <TableRow>
      <TableCell align='center' colSpan={context.columns.length}>
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
