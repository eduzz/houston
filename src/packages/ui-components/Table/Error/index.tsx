import * as React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { useContextSelector } from 'use-context-selector';

import Button from '../../Button';
import createUseStyles, { IUseStyleParam } from '../../styles/createUseStyles';
import Typography from '../../Typography';
import TableContext from '../context';

export interface ITableEErrorProps {
  error?: any;
  formater?: (error: any) => string;
  onRetry?: () => void;
  children?: React.ReactNode;
}

const useStyle = createUseStyles({
  text: ({ theme }: IUseStyleParam) => ({
    opacity: 0.8,
    fontStyle: 'italic',
    '& + button': { marginTop: theme.spacing(3) }
  })
});

const TableError = React.memo<ITableEErrorProps>(({ children, error, onRetry, formater }) => {
  const columnsLen = useContextSelector(TableContext, context => context.columns.length);
  const classes = useStyle();

  const errorMessage = React.useMemo(() => {
    if (formater) {
      return formater(error) ?? 'Algo inesperado aconteceu...';
    }

    return typeof error === 'string' ? error : 'Algo inesperado aconteceu...';
  }, [error, formater]);

  if (error) return null;
  children = children ?? errorMessage;

  return (
    <TableRow className='table-error-message'>
      <TableCell align='center' colSpan={columnsLen}>
        {typeof children === 'string' ? (
          <>
            <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className={classes.text}>
              {children}
            </Typography>
            {onRetry && (
              <Button variant='text' onClick={onRetry}>
                Tentar Novamente
              </Button>
            )}
          </>
        ) : (
          children
        )}
      </TableCell>
    </TableRow>
  );
});

export default TableError;
