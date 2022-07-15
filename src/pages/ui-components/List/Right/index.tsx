import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

export interface ListRightProps extends IStyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ListRight = ({ children, ...rest }: ListRightProps) => <div {...rest}>{children}</div>;

export default styled(ListRight, { label: 'houston-list-item-right' })(() => {
  return css`
    margin-left: auto;
  `;
});
