import * as React from 'react';

import { StyledProp, cx } from '@eduzz/houston-styles/styled';

export interface TableEmptyProps extends StyledProp {
  count: number;
  hasError?: boolean;
  children?: React.ReactNode;
}

const TableEmpty = React.memo<TableEmptyProps>(({ children, count, hasError, className }) => {
  if (count || hasError) return null;

  return (
    <tr className={cx(className, '__hts_table_empty')}>
      <td colSpan={1000}>{children ?? 'Nenhum dado encontrado'}</td>
    </tr>
  );
});

export default TableEmpty;
