import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Typography from '@eduzz/houston-ui/Typography';

import TableContext from '../context';

export interface ITableEmptyProps {
  count: number;
  children?: React.ReactNode;
}

const TableEmpty = React.memo<ITableEmptyProps>(({ children, count }) => {
  const columnsLen = useContextSelector(TableContext, context => context.columns.length);

  if (count) return null;

  children = children ?? 'Nenhum dado encontrado';

  return (
    <tr className='table-empty-message'>
      <td align='center' colSpan={columnsLen}>
        {typeof children === 'string' ? (
          <Typography size='normal' fontWeight='regular' lineHeight='comfortable'>
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
