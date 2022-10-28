import { ReactNode } from 'react';

import styled, { css, cx, StyledProp } from '../../styled';

export interface LayoutContentProps extends StyledProp {
  children?: ReactNode;
  disablePadding?: boolean;
}

const LayoutContent = ({ children, className, disablePadding }: LayoutContentProps) => {
  return <div className={cx(className, { 'hst-sidebar-content-disable-padding': disablePadding })}>{children}</div>;
};

export default styled(LayoutContent, { label: 'hst-sidebar-content' })(
  ({ theme }) => css`
    flex: 1;
    min-width: 0;
    /* não temos tokens e foi pedido pelo Dan Palmieri */
    background-color: #fcfcfc;

    &:not(.hst-sidebar-content-disable-padding) {
      padding: 2rem;

      ${theme.mediaQuery.down('sm')} {
        padding: 1rem;
      }
    }
  `
);
