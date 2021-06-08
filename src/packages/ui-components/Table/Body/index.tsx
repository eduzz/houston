import * as React from 'react';

import TableBodyMUI from '@material-ui/core/TableBody';

export interface ITableHeadProps {
  children: React.ReactNode;
}

const TableBody = React.memo<ITableHeadProps>(({ children }) => {
  return <TableBodyMUI>{children}</TableBodyMUI>;
});

export default TableBody;
