import * as React from 'react';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export interface ITableHeadProps {
  children: React.ReactNode;
}

const TableHeader = React.memo<ITableHeadProps>(({ children }) => {
  return (
    <TableHead>
      <TableRow>{children}</TableRow>
    </TableHead>
  );
});

export default TableHeader;
