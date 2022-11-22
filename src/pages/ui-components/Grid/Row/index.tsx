/* eslint-disable sonarjs/no-duplicate-string */
import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

const justifyContent = ['flex-start', 'flex-end', 'space-between', 'center', 'space-around'] as const;
const alignItems = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as const;
const spacing = ['none', 'nano', 'xxxs', 'xxs', 'xs', 'md', 'xl'] as const;

export type AlignItemsRow = typeof alignItems[number];
export type JustifyContentRow = typeof justifyContent[number];
export type Spacing = typeof spacing[number];

export type RowProps = StyledProp &
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    /**
     * Defaults to 'xxxs'
     */
    spacing?: Spacing;
    alignItems?: AlignItemsRow;
    justifyContent?: JustifyContentRow;
  };

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (
    { className, children, spacing = 'xxxs', justifyContent = 'flex-start', alignItems = 'flex-start', ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cx(
          className,
          `hst-grid-row-spacing-${spacing}`,
          `hst-grid-row-justify-content-${justifyContent}`,
          `hst-grid-row-align-items-${alignItems}`
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

/**
 * @deprecated Use Grid from Antd
 * https://ant.design/components/grid/
 */
export default styled(Row, { label: 'hst-grid-row' })(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    ${justifyContent.map(
      justifyContent => css`
        &.hst-grid-row-justify-content-${justifyContent} {
          justify-content: ${justifyContent};
        }
      `
    )}

    ${alignItems.map(
      alignItems => css`
        &.hst-grid-row-align-items-${alignItems} {
          align-items: ${alignItems};
        }
      `
    )}

    ${spacing.map(
      spacing => css`
        &.hst-grid-row-spacing-${spacing} {
          width: calc(100% + ${theme.spacing.inline[spacing] ?? '0rem'});
          margin: calc(-${theme.spacing.inline[spacing] ?? '0rem'} / 2);

          & > .hst-grid-column {
            box-sizing: border-box;
            padding: calc(${theme.spacing.inline[spacing] ?? '0rem'} / 2);
          }
        }
      `
    )}
  `
);
