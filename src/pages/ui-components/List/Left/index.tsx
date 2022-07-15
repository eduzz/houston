import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

export interface ListLeftProps extends IStyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ListLeft = ({ children, ...rest }: ListLeftProps) => <div {...rest}>{children}</div>;

export default styled(ListLeft, { label: 'houston-list-item-left' })(({ theme }) => {
  return css`
    margin-right: ${theme.spacing.inline.xxxs};
  `;
});
