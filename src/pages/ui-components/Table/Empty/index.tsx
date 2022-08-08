import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp, cx } from '@eduzz/houston-styles/styled';

import Typography, { TypographyProps } from '../../Typography';
import TableContext, { TableSize } from '../context';

export interface TableEmptyProps extends StyledProp {
  count: number;
  hasError?: boolean;
  children?: React.ReactNode;
}

const TableEmpty = React.memo<TableEmptyProps>(({ children, count, hasError, className }) => {
  const columnsLen = useContextSelector(TableContext, context => context.columns.length);
  const tableSize = useContextSelector(TableContext, context => context.size);

  if (count || hasError) return null;

  children = children ?? 'Nenhum dado encontrado';

  const fontSizeMap: Record<TableSize, TypographyProps['size']> = {
    small: 'xxs',
    medium: 'xs'
  };

  return (
    <tr className={cx(className, 'table-empty-message')}>
      <td align='center' colSpan={columnsLen}>
        {typeof children === 'string' ? (
          <Typography size={fontSizeMap[tableSize]} weight='regular' lineHeight='xl' className='__text'>
            {children}
          </Typography>
        ) : (
          children
        )}
      </td>
    </tr>
  );
});

export default styled(TableEmpty)`
  & > td > .__text {
    padding: ${({ theme }) => theme.spacing.xxs};
  }
`;
