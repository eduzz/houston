import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface TagLeftProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const TagLeft = ({ children, ...rest }: TagLeftProps) => <span {...rest}>{children}</span>;

export default styled(TagLeft, { label: 'houston-tag-item-left' })(({ theme }) => {
  return css`
    margin-right: ${theme.spacing.inline.nano};
  `;
});
