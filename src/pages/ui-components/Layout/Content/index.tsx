import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export interface LayoutContentProps extends StyledProp {
  children?: React.ReactNode;
  disablePadding?: boolean;
}

const LayoutContent = ({ children, className, disablePadding }: LayoutContentProps) => {
  return <div className={cx(className, { 'hst-sidebar-content-disable-padding': disablePadding })}>{children}</div>;
};

export default styled(LayoutContent, { label: 'hst-sidebar-content' })(
  ({ theme }) => css`
    flex: 1;
    min-width: 0;
    background-color: #fcfcfc;

    &:not(.hst-sidebar-content-disable-padding) {
      padding: ${theme.spacing.xs};

      ${theme.breakpoints.down('sm')} {
        padding: ${theme.spacing.stack.xxxs} ${theme.spacing.xxxs};
      }
    }
  `
);
