import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface TextProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const Text = ({ children, ...rest }: TextProps) => {
  return <span {...rest}>{children}</span>;
};

export default styled(Text, { label: 'houston-tag-text' })(({ theme }) => {
  return css`
    font-size: ${theme.font.size.xxs};
    line-height: ${theme.line.height.default};
  `;
});
