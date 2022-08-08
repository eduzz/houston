import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { cx, StyledProp } from '@eduzz/houston-styles/styled';

import Button from '../../Button';
import Typography, { TypographyProps } from '../../Typography';
import TableContext, { TableSize } from '../context';

export interface TableErrorProps extends StyledProp {
  error?: any;
  formater?: (error: any) => string;
  onRetry?: () => void;
  children?: React.ReactNode;
}
const TableError = React.memo<TableErrorProps>(({ children, error, onRetry, formater, className }) => {
  const tableSize = useContextSelector(TableContext, context => context.size);

  const errorMessage = React.useMemo(() => {
    if (!error) return null;

    if (formater) {
      return formater(error) ?? 'Algo inesperado aconteceu...';
    }

    return typeof error === 'string' ? error : 'Algo inesperado aconteceu...';
  }, [error, formater]);

  const fontSizeMap: Record<TableSize, TypographyProps['size']> = {
    small: 'xxs',
    medium: 'xs'
  };

  if (!error) return null;
  children = children ?? errorMessage;

  return (
    <tr className={cx(className, 'table-error-message')}>
      <td align='center' colSpan={1000}>
        {typeof children === 'string' ? (
          <>
            <Typography size={fontSizeMap[tableSize]} weight='regular' lineHeight='xl' className='__text'>
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
    padding: ${({ theme }) => theme.spacing.xxs};

    & + button {
      margin-top: ${({ theme }) => theme.spacing.xxxs};
    }
  }
`;
