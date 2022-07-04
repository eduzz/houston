import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export type IContainerLayout = 'fluid' | 'solid';
export interface IContainer extends IStyledProp {
  children: React.ReactNode;
  layout?: IContainerLayout;
}

const Container = React.forwardRef<HTMLDivElement, IContainer>(({ className, children, layout }, ref) => (
  <div ref={ref} className={cx(className, `--${layout ?? 'solid'}`)}>
    {children}
  </div>
));

export default React.memo(styled(Container, { label: 'houston-grid-container' })`
  ${({ theme }) => {
    const MAX_WIDTH_IN_PX = theme.breakpoints.xlg;
    return css`
      width: 100%;
      max-width: ${MAX_WIDTH_IN_PX};
      margin: 0 auto;
      padding: 0 ${theme.spacing.xs};

      ${theme.breakpoints.down('sm')} {
        padding: 0 ${theme.spacing.xxxs};
      }

      &.--fluid {
        max-width: 100%;
      }
    `;
  }}
`);
