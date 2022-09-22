import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { StyledProp } from '@eduzz/houston-styles';

import { ShowcaseContext } from '../context';

const Content = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const currentStep = useContextSelector(ShowcaseContext, context => context.currentStep);
  const stepSize = useContextSelector(ShowcaseContext, context => context.stepSize);
  const offset = (currentStep - 1) * -stepSize;

  return (
    <div {...rest} style={{ transform: `translateX(${offset}px)` }}>
      {children}
    </div>
  );
};

export default styled(Content, { label: 'hst-showcase-content' })`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  transition: transform ease-in-out 0.5s;
`;
