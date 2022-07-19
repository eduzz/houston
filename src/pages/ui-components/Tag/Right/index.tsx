import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface TagRightProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const TagRight = ({ children, ...rest }: TagRightProps) => <span {...rest}>{children}</span>;

export default styled(TagRight, { label: 'houston-tag-item-right' })(({ theme }) => {
  return css`
    margin-left: ${theme.spacing.inline.nano};
  `;
});
