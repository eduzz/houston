import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface TextProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

const Text = ({ children, ...rest }: TextProps) => {
  return <span {...rest}>{children}</span>;
};

export default styled(Text, { label: 'houston-tag-text' })(({ theme }) => {
  return css`
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.regular};
    line-height: ${theme.line.height.default};
    user-select: none;
  `;
});
