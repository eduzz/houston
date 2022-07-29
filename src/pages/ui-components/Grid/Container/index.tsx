import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export type ContainerLayout = 'fluid' | 'solid';
export interface ContainerProps extends StyledProp {
  children: React.ReactNode;
  layout?: ContainerLayout;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ className, children, layout }, ref) => (
  <div ref={ref} className={cx(className, `--layout-${layout ?? 'solid'}`)}>
    {children}
  </div>
));

export default styled(Container, { label: 'houston-grid-container' })(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.breakpoints.xlg};
    margin: 0 auto;

    &.--layout-fluid {
      max-width: 100%;
    }
  `
);
