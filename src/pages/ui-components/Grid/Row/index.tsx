import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import { RowProvider } from '../context';

type AlignItemsRow = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type JustifyContentRow = 'flex-start' | 'flex-end' | 'space-between' | 'center' | 'space-around';
export type Spacing = 'none' | 'nano' | 'xxxs' | 'xxs' | 'xs' | 'md' | 'xl';

export interface IRow extends IStyledProp {
  children: React.ReactNode;
  /**
   * Defaults to 'xxxs'
   */
  spacing?: Spacing;
  alignItems?: AlignItemsRow;
  justifyContent?: JustifyContentRow;
}

const Row = React.forwardRef<HTMLDivElement, IRow>(({ className, children, spacing = 'xxxs' }, ref) => {
  return (
    <RowProvider spacing={spacing}>
      <div ref={ref} className={cx(className, `--spacing-${spacing}`)}>
        {children}
      </div>
    </RowProvider>
  );
});

const NONE_IN_REM = '0rem';

export default React.memo(styled(Row, { label: 'houston-grid-row' })`
  ${({ theme, alignItems, justifyContent, spacing = 'xxxs' }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      align-items: ${alignItems};
      justify-content: ${justifyContent};

      &.--spacing-${spacing} {
        width: calc(100% + ${theme.spacing.inline[spacing] ?? NONE_IN_REM});
        margin: calc(-${theme.spacing.inline[spacing] ?? NONE_IN_REM} / 2);
      }
    `;
  }}
`);
