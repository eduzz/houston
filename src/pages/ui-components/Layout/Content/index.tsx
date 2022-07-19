import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export interface LayoutContentProps extends StyledProp {
  children?: React.ReactNode;
  disablePadding?: boolean;
}

const LayoutContent = ({ children, className, disablePadding }: LayoutContentProps) => {
  return <div className={cx(className, { '--disable-padding': disablePadding })}>{children}</div>;
};

export default styled(LayoutContent, { label: 'houston-sidebar-content' })(
  ({ theme }) => css`
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;

    &:not(.--disable-padding) {
      padding: ${theme.spacing.stack.lg} 0;

      ${theme.breakpoints.down('md')} {
        padding: ${theme.spacing.stack.sm} 0;
      }

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.stack.xxxs} 0;
      }
    }
  `
);
