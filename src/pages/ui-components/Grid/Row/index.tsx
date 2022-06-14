import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

type alignItemsRow = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

type justifyRow = 'flex-start' | 'flex-end' | 'space-between' | 'center' | 'space-around';
interface IRow extends IStyledProp {
  children: React.ReactNode;
  alignItems?: alignItemsRow;
  justify?: justifyRow;
}

const Row = ({ className, children }: IRow) => <div className={className}>{children}</div>;

export default React.memo(styled(Row, { label: 'houston-row' })`
  ${({ theme, alignItems, justify }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: ${alignItems ?? 'center'};
    justify-content: ${justify ?? 'center'};
    border: solid;
    border-color: purple;
  `}
`);
