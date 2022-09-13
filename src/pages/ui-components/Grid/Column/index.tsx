import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

const COLUMNS = 12;
const columnSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'fill'] as const;
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xlg'] as const;

type ColumnSize = typeof columnSizes[number];
export type ColumnBreakPoints = typeof breakpoints[number];

export type ColumnProps = StyledProp &
  Partial<Record<ColumnBreakPoints, ColumnSize>> &
  React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
  };

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ className, children, xs = 'fill', sm, md, lg, xlg, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(
          className,
          '__houston_grid_column',
          xs && `--xs-${xs}`,
          sm && `--sm-${sm}`,
          md && `--md-${md}`,
          lg && `--lg-${lg}`,
          xlg && `--xlg-${xlg}`
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default styled(Column, { label: 'houston-grid-column' })(({ theme }) =>
  breakpoints.map(breakpoint => {
    const cssSize = columnSizes.map(
      size => css`
        &.--${breakpoint}-${size} {
          flex-basis: ${typeof size === 'string' ? 'auto' : `${(size / COLUMNS) * 100}%`};
          flex: ${size === 'fill' ? 1 : null};
        }
      `
    );

    if (breakpoint === 'xs') {
      return cssSize;
    }

    return css`
      ${theme.breakpoints.up(breakpoint)} {
        ${cssSize}
      }
    `;
  })
);
