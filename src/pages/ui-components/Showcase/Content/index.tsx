import * as React from 'react';

import styled, { css } from '@eduzz/houston-styles';

import { ShowcaseContext } from '../context';
import { MIN_STEP_SIZE } from '../Showcase';
import useResize from './useResize';

export interface ContentProps {
  currentStep: number;
}

const Content = ({
  children,
  className
}: ContentProps & React.HTMLAttributes<HTMLDivElement> & { stepSize: number; windowWidth: number }) => {
  return <div className={className}>{children}</div>;
};

const StyledContent = styled(Content, { label: 'hst-showcase-content' })`
  ${({ currentStep, stepSize, windowWidth }) => {
    const offset = stepSize < MIN_STEP_SIZE ? (MIN_STEP_SIZE - windowWidth) / 2 : 0;
    const currentMargin = (currentStep - 1) * -stepSize + offset;

    return css`
      display: block;
      position: relative;
      top: 0;
      left: 0;
      transform: translate3d(${currentMargin || 0}px, 0px, 0px);
      transition: transform ease-in-out 0.5s;
      width: ${stepSize * 3}px;
    `;
  }}
`;

const ContentWrapper = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const { currentStep, stepSize } = React.useContext(ShowcaseContext);
  const windowSize = useResize();

  return (
    <StyledContent currentStep={currentStep} stepSize={stepSize} windowWidth={windowSize.width} {...rest}>
      {children}
    </StyledContent>
  );
};

export default ContentWrapper;
