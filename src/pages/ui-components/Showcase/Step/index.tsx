import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import { ShowcaseContext } from '../context';

const Step = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  return <div {...rest}>{children}</div>;
};

export default styled(Step, { label: 'hst-showcase-step' })`
  ${({ theme }) => {
    const stepSize = useContextSelector(ShowcaseContext, context => context.stepSize);

    return css`
      width: ${theme.pxToRem(stepSize)}rem;
      flex-shrink: 0;
    `;
  }}
`;
