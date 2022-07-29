import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

const justifyContent = ['flex-start', 'flex-end', 'space-between', 'center', 'space-around'] as const;
const alignItems = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as const;
const spacing = ['none', 'nano', 'xxxs', 'xxs', 'xs', 'md', 'xl'] as const;

export type AlignItemsRow = typeof alignItems[number];
export type JustifyContentRow = typeof justifyContent[number];
export type Spacing = typeof spacing[number];

export interface RowProps extends StyledProp {
  children: React.ReactNode;
  /**
   * Defaults to 'xxxs'
   */
  spacing?: Spacing;
  alignItems?: AlignItemsRow;
  justifyContent?: JustifyContentRow;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ className, children, spacing = 'xxxs', justifyContent = 'flex-start', alignItems = 'flex-start' }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          className,
          `--spacing-${spacing}`,
          `--justify-content-${justifyContent}`,
          `--align-items-${alignItems}`
        )}
      >
        {children}
      </div>
    );
  }
);

export default styled(Row, { label: 'houston-grid-row' })(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    ${justifyContent.map(
      justifyContent => css`
        &.--justify-content-${justifyContent} {
          justify-content: ${justifyContent};
        }
      `
    )}

    ${alignItems.map(
      alignItems => css`
        &.--align-items-${alignItems} {
          align-items: ${alignItems};
        }
      `
    )}

    ${spacing.map(
      spacing => css`
        &.--spacing-${spacing} {
          width: calc(100% + ${theme.spacing.inline[spacing] ?? '0rem'});
          margin: calc(-${theme.spacing.inline[spacing] ?? '0rem'} / 2);

          & > .__houston_grid_column {
            box-sizing: border-box;
            padding: calc(${theme.spacing.inline[spacing] ?? '0rem'} / 2);
          }
        }
      `
    )}
  `
);
