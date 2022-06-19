import * as React from 'react';

import styled, { css, cx, IStyledProp, IHoustonTheme } from '@eduzz/houston-styles';

import { IContainerType } from '../Container';
import { useContainer } from '../context';

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | boolean;
type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
type Sizes = Partial<Record<BreakPoints, ColumnSize>>;

export type IColumn = IStyledProp &
  Sizes & {
    children: React.ReactNode;
  };

const Column = ({ className, children, xs, sm, md, lg, xlg }: IColumn) => {
  const { spacing } = useContainer();
  return (
    <div
      className={cx(
        className,
        `--${spacing}`,
        xs && `xs-${xs}`,
        sm && `sm-${sm}`,
        md && `md-${md}`,
        lg && `lg-${lg}`,
        xlg && `xlg-${xlg}`
      )}
    >
      {children}
    </div>
  );
};

const COLUMNS = 12;

const generateBreakAndWidth = (theme: IHoustonTheme, sizes: Sizes, spacing: IContainerType) => {
  const containerType = {
    comfortable: theme.spacing.sm,
    compact: theme.spacing.nano,
    cozy: theme.spacing.xxxs
  };

  return Object.entries(sizes)
    .map(bp => {
      if (typeof bp[1] === 'boolean') {
        return `
        &.${bp[0]}-${bp[1]} {
          ${theme.breakpoints.up(bp[0] as keyof Sizes)} {
            flex-grow: 1;
            width: auto;
            margin: calc(${containerType[spacing]} / 2);
          }
        }`;
      }

      if (bp[1] === 'auto') {
        return `
        &.${bp[0]}-${bp[1]} {
          ${theme.breakpoints.up(bp[0] as keyof Sizes)} { 
            max-width: none;
            width: auto;
            margin: auto;
          }
        }`;
      }

      return `
      &.${bp[0]}-${bp[1]} {
        ${theme.breakpoints.up(bp[0] as keyof Sizes)} { 
          width: calc(${(sizes[bp[0]] / COLUMNS) * 100}% - ${containerType[spacing]});
          margin: calc(${containerType[spacing]} / 2);
        }
      }`;
    })
    .join('');
};

export default React.memo(
  styled(Column, { label: 'houston-column' })(({ theme, xs, sm, md, lg, xlg }) => {
    const sizes = {
      ...(xs && { xs }),
      ...(sm && { sm }),
      ...(md && { md }),
      ...(lg && { lg }),
      ...(xlg && { xlg })
    };

    return css`
      &.--comfortable {
        ${generateBreakAndWidth(theme, sizes, 'comfortable')}
      }

      &.--cozy {
        ${generateBreakAndWidth(theme, sizes, 'cozy')}
      }

      &.--compact {
        ${generateBreakAndWidth(theme, sizes, 'compact')}
      }
    `;
  })
);
