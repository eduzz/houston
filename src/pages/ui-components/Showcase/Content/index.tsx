import * as React from 'react';

import styled, { css } from '@eduzz/houston-styles';

import { ShowcaseContext } from '../context';

export interface ContentProps {
  currentStep: number;
}

const Content = ({
  children,
  className
}: ContentProps & React.HTMLAttributes<HTMLDivElement> & { stepSize: number }) => {
  return <div className={className}>{children}</div>;
};

const StyledContent = styled(Content, { label: 'hst-showcase-content' })`
  ${({ currentStep, stepSize }) => {
    const currentMargin = (currentStep - 1) * -stepSize;

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

  return (
    <div
      style={{
        position: 'relative',
        display: 'block',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        transform: 'translateZ(0)'
      }}
    >
      <StyledContent currentStep={currentStep} stepSize={stepSize} {...rest}>
        {children}
      </StyledContent>
    </div>
  );
};

export default ContentWrapper;
