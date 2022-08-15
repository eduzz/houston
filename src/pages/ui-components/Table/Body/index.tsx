import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Button from '../../Button';
import LineLoader from '../../Loaders/Line';
import Typography from '../../Typography';
import TableCell from '../Cell';
import TableContext from '../context';

export interface TableBodyProps {
  children: React.ReactNode;
}

const TableBody = ({ children }: TableBodyProps) => {
  const loading = useContextSelector(TableContext, context => context.loading);
  const loadingText = useContextSelector(TableContext, context => context.loadingText);
  const error = useContextSelector(TableContext, context => context.error);
  const errorFormater = useContextSelector(TableContext, context => context.errorFormater);
  const errorOnRetry = useContextSelector(TableContext, context => context.errorOnRetry);
  const total = useContextSelector(TableContext, context => context.total);
  const emptyText = useContextSelector(TableContext, context => context.emptyText);

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
