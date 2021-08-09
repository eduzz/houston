import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import Button from '@eduzz/houston-ui/Button';
import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';
import Typography from '@eduzz/houston-ui/Typography';

import TableContext from '../context';

export interface ITableEErrorProps {
  error?: any;
  formater?: (error: any) => string;
  onRetry?: () => void;
  children?: React.ReactNode;
}

const useStyle = createUseStyles(theme => ({
  text: {
    opacity: 0.8,
    fontStyle: 'italic',
    '& + button': { marginTop: theme.spacing(3) }
  }
}));

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
    <tr className='table-error-message'>
      <td align='center' colSpan={columnsLen}>
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
      </td>
    </tr>
  );
});

export default TableError;
