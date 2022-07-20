import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export interface TextProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const Text = ({ children, className, ...rest }: TextProps) => {
  return (
    <span className={cx(className, 'houston-tag-text')} {...rest}>
      {children}
    </span>
  );
};

export default styled(Text)(({ theme }) => {
  return css`
    font-size: ${theme.font.size.xxs};
    line-height: ${theme.line.height.default};
    margin: 0 ${theme.spacing.stack.quarck};
  `;
});
