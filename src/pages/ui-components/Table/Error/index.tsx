import * as React from 'react';

import Button from '../../Button';
import createUseStyles from '../../styles/createUseStyles';
import Typography from '../../Typography';

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
  const classes = useStyle();

  const errorMessage = React.useMemo(() => {
    if (!error) return null;

    if (formater) {
      return formater(error) ?? 'Algo inesperado aconteceu...';
    }

    return typeof error === 'string' ? error : 'Algo inesperado aconteceu...';
  }, [error, formater]);

  if (!error) return null;
  children = children ?? errorMessage;

  return (
    <tr className='table-error-message'>
      <td align='center' colSpan={1000}>
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
