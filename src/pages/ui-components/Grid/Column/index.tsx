import * as React from 'react';

import styled, { css, cx, StyledProp, HoustonThemeProps } from '@eduzz/houston-styles';

import { useRow } from '../context';
import { Spacing } from '../Row';

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | true;
type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
type Sizes = Partial<Record<BreakPoints, ColumnSize>>;

export type ColumnProps = StyledProp &
  Sizes & {
    children: React.ReactNode;
  };

const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ className, children, xs = true, sm, md, lg, xlg }, ref) => {
    const { spacing = 'xxs' } = useRow();
    return (
      <div
        ref={ref}
        className={cx(
          className,
          `--spacing-${spacing}`,
          xs && `--xs-${xs}`,
          sm && `--sm-${sm}`,
          md && `--md-${md}`,
          lg && `--lg-${lg}`,
          xlg && `--xlg-${xlg}`
        )}
      >
        {children}
      </div>
    );
  }
);

const COLUMNS = 12;
const NONE_IN_REM = '0rem';

const generateBreakAndWidth = (theme: HoustonThemeProps, sizes: Sizes, spacing: Spacing) => {
  return Object.entries(sizes)
    .map(([breakpoint, size]) => {
      if (typeof size === 'boolean') {
        return `
        &.--${breakpoint}-${size} {
          ${theme.breakpoints.up(breakpoint as BreakPoints)} {
            flex-grow: 1;
            width: auto;
            margin: calc(${theme.spacing.inline[spacing] ?? NONE_IN_REM} / 2);
          }
        }`;
      }

      return `
      &.--${breakpoint}-${size} {
        ${theme.breakpoints.up(breakpoint as BreakPoints)} { 
          width: calc(${((sizes[breakpoint] as number) / COLUMNS) * 100}% - ${
        theme.spacing.inline[spacing] ?? NONE_IN_REM
      });
          margin: calc(${theme.spacing.inline[spacing] ?? NONE_IN_REM} / 2);
        }
      }`;
    })
    .join('');
};

export default React.memo(
  styled(Column, { label: 'houston-grid-column' })(({ theme, xs = true, sm, md, lg, xlg }) => {
    const sizes = {
      ...(xs && { xs }),
      ...(sm && { sm }),
      ...(md && { md }),
      ...(lg && { lg }),
      ...(xlg && { xlg })
    };

    return css`
      &.--spacing-none {
        ${generateBreakAndWidth(theme, sizes, 'none')}
      }

      &.--spacing-nano {
        ${generateBreakAndWidth(theme, sizes, 'nano')}
      }

      &.--spacing-xxxs {
        margin: calc(${theme.spacing.xxxs} / 2);
        ${generateBreakAndWidth(theme, sizes, 'xxxs')}
      }

      &.--spacing-xxs {
        ${generateBreakAndWidth(theme, sizes, 'xxs')}
      }

      &.--spacing-xs {
        ${generateBreakAndWidth(theme, sizes, 'xs')}
      }

      &.--spacing-md {
        ${generateBreakAndWidth(theme, sizes, 'md')}
      }

      &.--spacing-xl {
        ${generateBreakAndWidth(theme, sizes, 'xl')}
      }
    `;
  })
);
