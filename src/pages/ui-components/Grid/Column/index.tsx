import * as React from 'react';

import styled, { css, cx, IStyledProp, IHoustonTheme } from '@eduzz/houston-styles';

import { IContainerType } from '../Container';
import { useContainer } from '../context';

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
type Sizes = Partial<Record<BreakPoints, ColumnSize>>;

type IColumn = IStyledProp &
  Sizes & {
    children: React.ReactNode;
  };

const Column = ({ className, children }: IColumn) => {
  const { spacing } = useContainer();
  return <div className={cx(className, `--${spacing}`)}>{children}</div>;
};

const COLUMNS = 12;

const generateBreakAndWidth = (theme: IHoustonTheme, sizes: Sizes, spacing: IContainerType) => {
  const containerType = {
    comfortable: theme.spacing.sm,
    compact: theme.spacing.nano,
    cozy: theme.spacing.xxxs
  };
  return Object.keys(sizes)
    .map(
      bp =>
        `${theme.breakpoints.up(bp as keyof Sizes)} { 
          width: calc(${(sizes[bp] / COLUMNS) * 100}% - ${containerType[spacing]});
          margin: calc(${containerType[spacing]} / 2);
        }`
    )
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
