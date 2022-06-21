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

const MAX_WIDTH_IN_PX = 1062;

export default React.memo(styled(Container, { label: 'houston-grid-container' })`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.pxToRem(MAX_WIDTH_IN_PX)}rem;
    margin: 0 auto;
    padding: 0 ${theme.spacing.xs};

    &.--fluid {
      max-width: 100%;
    }
  `}
`);
