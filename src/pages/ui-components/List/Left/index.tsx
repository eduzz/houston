import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface ListLeftProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ListLeft = ({ children, ...rest }: ListLeftProps) => <div {...rest}>{children}</div>;

export default styled(ListLeft, { label: 'hst-list-item-left' })(({ theme }) => {
  return css`
    margin-right: ${theme.spacing.inline.xxxs};
  `;
});
