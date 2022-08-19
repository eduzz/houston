import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import { ShowcaseContext } from '../context';

export interface StepProps {
  maxWidth: number;
}

const Step = ({
  children,
  ...rest
}: StepProps & React.HTMLAttributes<HTMLDivElement> & StyledProp & { stepSize: number }) => {
  return <div {...rest}>{children}</div>;
};

const StyledStep = styled(Step, { label: 'hst-showcase-step' })`
  ${({ stepSize }) => css`
    width: ${stepSize}px;
    float: left;
    display: block;
    height: 100%;
    min-height: 1px;
  `}
`;

const StepWrapper = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const { maxWidth, stepSize } = React.useContext(ShowcaseContext);

  return (
    <StyledStep maxWidth={maxWidth} stepSize={stepSize} {...rest}>
      {children}
    </StyledStep>
  );
};

export default StepWrapper;
