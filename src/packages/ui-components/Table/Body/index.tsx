import * as React from 'react';

import TableBodyMUI from '@material-ui/core/TableBody';

import { useContextSelector } from 'use-context-selector';

import createUseStyles, { IUseStyleParam } from '../../styles/createUseStyles';
import TableContext, { ITableContext } from '../context';
import TableLoading from '../Loading';

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
  const stripedRows = useContextSelector(TableContext, context => context.stripedRows);
  const loading = useContextSelector(TableContext, context => context.loading);

  const classesProp = React.useMemo(() => ({ stripedRows }), [stripedRows]);
  const classes = useStyle(classesProp);

  return <TableBodyMUI className={classes.body}>{loading ? <TableLoading /> : children}</TableBodyMUI>;
});

export default TableBody;
