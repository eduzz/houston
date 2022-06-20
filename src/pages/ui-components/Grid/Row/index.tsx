import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import { useContainer } from '../context';

type AlignItemsRow = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type JustifyRow = 'flex-start' | 'flex-end' | 'space-between' | 'center' | 'space-around';

export interface IRow extends IStyledProp {
  children: React.ReactNode;
  alignItems?: AlignItemsRow;
  justify?: JustifyRow;
}

const Row = ({ className, children }: IRow) => {
  const { spacing } = useContainer() ?? { spacing: 'cozy' };
  return <div className={cx(className, `--${spacing}`)}>{children}</div>;
};

export default React.memo(styled(Row, { label: 'houston-row' })`
  ${({ theme, alignItems, justify }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      align-items: ${alignItems};
      justify-content: ${justify};

      &.--comfortable {
        width: calc(100% + ${theme.spacing.sm});
        margin: calc(-${theme.spacing.sm} / 2);
      }

      &.--cozy {
        width: calc(100% + ${theme.spacing.xxxs});
        margin: calc(-${theme.spacing.xxxs} / 2);
      }

      &.--compact {
        width: calc(100% + ${theme.spacing.nano});
        margin: calc(-${theme.spacing.nano} / 2);
      }
    `;
  }}
`);
