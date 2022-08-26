import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import { ShowcaseContext } from '../context';

export interface ContentProps {
  stepSize: number;
  totalSteps: number;
  offset: number;
}

const Content = ({ children, offset, ...rest }: ContentProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return (
    <div {...rest} style={{ transform: `translate3d(${offset || 0}px, 0px, 0px)` }}>
      {children}
    </div>
  );
};

const StyledContent = styled(Content, { label: 'hst-showcase-content' })`
  ${({ theme, stepSize, totalSteps }) => {
    return css`
      display: flex;
      position: relative;
      top: 0;
      left: 0;
      transition: transform ease-in-out 0.5s;
      width: ${theme.pxToRem(stepSize * totalSteps)}rem;
    `;
  }}
`;

const ContentWrapper = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  const currentStep = useContextSelector(ShowcaseContext, context => context.currentStep);
  const stepSize = useContextSelector(ShowcaseContext, context => context.stepSize);
  const totalSteps = useContextSelector(ShowcaseContext, context => context.totalSteps);
  const offset = currentStep === 1 ? 0 : (currentStep - 1) * -stepSize;

  return (
    <StyledContent stepSize={stepSize} totalSteps={totalSteps} offset={offset}>
      {children}
    </StyledContent>
  );
};

export default ContentWrapper;
