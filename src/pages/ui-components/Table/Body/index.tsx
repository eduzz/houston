import * as React from 'react';

import Button from '../../Button';
import LineLoader from '../../Loaders/Line';
import Typography from '../../Typography';
import TableCell from '../Cell';

export interface TableBodyProps {
  children: React.ReactNode;

  loading?: boolean;
  loadingText?: React.ReactNode;

  error?: any;
  errorFormater?: (error: any) => string;
  errorOnRetry?: () => void;

  total?: number;
  emptyText?: string;
}

const TableBody = ({
  children,

  loading,
  loadingText = 'Carregando...',

  error,
  errorFormater,
  errorOnRetry,

  total,
  emptyText = 'Nenhum dado encontrado'
}: TableBodyProps) => {
  const errorMessage = React.useMemo(() => {
    if (!error) return null;

    if (errorFormater) {
      return errorFormater(error) ?? 'Algo inesperado aconteceu...';
    }

    return typeof error === 'string' ? error : 'Algo inesperado aconteceu...';
  }, [error, errorFormater]);

  if (loading) {
    return (
      <tbody>
        <tr>
          <td align='center' colSpan={1000}>
            <LineLoader />
            <div className='__hts-table-loading-text'>{loadingText}</div>
          </td>
        </tr>
      </tbody>
    );
  }

  if (error) {
    return (
      <tbody>
        <tr>
          <TableCell align='center' colSpan={1000}>
            <Typography marginBottom='xxxs' weight='regular' lineHeight='xl' className='__text'>
              {errorMessage}
            </Typography>

            {errorOnRetry && (
              <Button variant='outlined' onClick={errorOnRetry}>
                Tentar Novamente
              </Button>
            )}
          </TableCell>
        </tr>
      </tbody>
    );
  }

  if (total === 0) {
    return (
      <tbody>
        <tr>
          <TableCell align='center' colSpan={1000}>
            {emptyText}
          </TableCell>
        </tr>
      </tbody>
    );
  }

  return <tbody>{children}</tbody>;
};

export default TableBody;
