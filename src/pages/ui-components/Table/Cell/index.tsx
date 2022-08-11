import * as React from 'react';

import { cx, StyledProp } from '@eduzz/houston-styles';

export interface TableCellProps extends StyledProp, React.TdHTMLAttributes<HTMLTableCellElement> {
  children?: React.ReactNode;
}

const TableCell = ({ children, className, ...props }: TableCellProps) => {
  return (
    <td {...props} className={cx(className, '__hts-table-cell')}>
      {children}
    </td>
  );
};

export default TableCell;
