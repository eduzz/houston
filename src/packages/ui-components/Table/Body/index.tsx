import * as React from 'react';

import TableBodyMUI from '@material-ui/core/TableBody';

import createUseStyles, { IUseStyleParam } from '../../styles/createUseStyles';
import TableContext, { ITableContext } from '../context';

export interface ITableHeadProps {
  children: React.ReactNode;
}

const useStyle = createUseStyles({
  body: ({ props, theme }: IUseStyleParam<ITableContext>) => ({
    ...(props?.stripedRows
      ? {
          '& > *:nth-child(2n)': {
            backgroundColor: theme.colors.grey[100]
          }
        }
      : {})
  })
});

const TableBody = React.memo<ITableHeadProps>(({ children }) => {
  const context = React.useContext(TableContext);
  const classes = useStyle(context);

  return <TableBodyMUI className={classes.body}>{children}</TableBodyMUI>;
});

export default TableBody;
