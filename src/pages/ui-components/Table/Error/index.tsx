import * as React from 'react';

import Button from '../../Button';
import styled, { cx, IStyledProp } from '../../styles/styled';
import Typography from '../../Typography';

export interface ITableEErrorProps extends IStyledProp {
  error?: any;
  formater?: (error: any) => string;
  onRetry?: () => void;
  children?: React.ReactNode;
}
const TableError = React.memo<ITableEErrorProps>(({ children, error, onRetry, formater, className }) => {
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
    <tr className={cx(className, 'table-error-message')}>
      <td align='center' colSpan={1000}>
        {typeof children === 'string' ? (
          <>
            <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className='__text'>
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

export default styled(TableError)`
  & > td > .__text {
    opacity: 0.8;
    font-style: italic;

    & + button {
      margin-top: ${({ theme }) => theme.spacing(3)};
    }
  }
`;
