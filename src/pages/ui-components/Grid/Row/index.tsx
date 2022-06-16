import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

import { useContainer } from '../context';

type alignItemsRow = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type justifyRow = 'flex-start' | 'flex-end' | 'space-between' | 'center' | 'space-around';

interface IRow extends IStyledProp {
  children: React.ReactNode;
  alignItems?: alignItemsRow;
  justify?: justifyRow;
}

const Row = ({ className, children }: IRow) => <div className={className}>{children}</div>;

export default React.memo(styled(Row, { label: 'houston-row' })`
  ${({ alignItems, justify }) => {
    const { spacing } = useContainer();
    return css`
      display: flex;
      flex-wrap: wrap;
      align-items: ${alignItems ?? 'center'};
      justify-content: ${justify ?? 'center'};
      width: calc(100% + ${spacing}px);
      margin: calc(-${spacing}px / 2);
    `;
  }}
`);
