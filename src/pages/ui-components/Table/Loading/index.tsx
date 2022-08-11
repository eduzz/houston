import * as React from 'react';

import LinearProgress from '@mui/material/LinearProgress';

import { StyledProp } from '@eduzz/houston-styles/styled';

export interface TableLoadingProps extends StyledProp {
  children: React.ReactNode;
}
const TableLoading = React.memo<TableLoadingProps>(({ children, className }) => {
  return (
    <tr className={className}>
      <td align='center' colSpan={1000}>
        <LinearProgress />
        {typeof children === 'string' && <div className='__hts-table-loading-text'>{children}</div>}
      </td>
    </tr>
  );
});

export default TableLoading;
