import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Button from '../../Button';
import LineLoader from '../../Loaders/Line';
import Typography from '../../Typography';
import TableCell from '../Cell';
import TableContext from '../context';

export interface TableBodyProps {
  id?: string;
  children: React.ReactNode;
}

const TableBody = ({ id, children }: TableBodyProps) => {
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
      <tbody id={id}>
        <tr>
          <td align='center' colSpan={1000}>
            <LineLoader />
            <div className='hts-table-loading-text'>
              <Typography weight='regular' lineHeight='xl' className='hst-table-body-text'>
                {loadingText}
              </Typography>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  if (error) {
    return (
      <tbody id={id}>
        <tr>
          <TableCell align='center' colSpan={1000}>
            <Typography marginBottom='xxxs' weight='regular' lineHeight='xl' className='hst-table-body-text'>
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
      <tbody id={id}>
        <tr>
          <TableCell align='center' colSpan={1000}>
            <Typography weight='regular' lineHeight='xl' className='hst-table-body-text'>
              {emptyText}
            </Typography>
          </TableCell>
        </tr>
      </tbody>
    );
  }

  return <tbody>{children}</tbody>;
};

/**
 * @deprecated Use Table from Antd
 * https://ant.design/components/table/
 */
export default TableBody;
