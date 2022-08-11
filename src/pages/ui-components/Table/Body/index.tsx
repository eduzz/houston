import * as React from 'react';

import TableLoading from '../Loading';

export interface TableBodyProps {
  children: React.ReactNode;
  loading?: boolean;
  loadingText?: React.ReactNode;
}

const TableBody = ({ children, loading, loadingText = 'Carregando...' }: TableBodyProps) => {
  return <tbody>{loading ? <TableLoading>{loadingText}</TableLoading> : children}</tbody>;
};

export default TableBody;
