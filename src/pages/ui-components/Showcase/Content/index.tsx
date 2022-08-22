import * as React from 'react';

import styled, { css } from '@eduzz/houston-styles';

import { ShowcaseContext } from '../context';
import useResize from './useResize';

export interface ContentProps {
  currentStep: number;
  totalSteps: number;
}

const Content = ({
  children,
  className
}: ContentProps & React.HTMLAttributes<HTMLDivElement> & { stepSize: number; windowWidth: number }) => {
  return <div className={className}>{children}</div>;
};

const StyledContent = styled(Content, { label: 'hst-showcase-content' })`
  ${({ currentStep, stepSize, totalSteps }) => {
    const currentMargin = currentStep === 1 ? 0 : (currentStep - 1) * -stepSize;

    return css`
      display: block;
      position: relative;
      top: 0;
      left: 0;
      transform: translate3d(${currentMargin || 0}px, 0px, 0px);
      transition: transform ease-in-out 0.5s;
      width: ${stepSize * totalSteps}px;
    `;
  }}
`;

const ContentWrapper = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const { currentStep, stepSize, totalSteps } = React.useContext(ShowcaseContext);
  const windowSize = useResize();

  return (
    <StyledContent
      currentStep={currentStep}
      stepSize={stepSize}
      windowWidth={windowSize.width}
      totalSteps={totalSteps}
      {...rest}
    >
      {children}
    </StyledContent>
  );
};

export default ContentWrapper;
