import { useContext } from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles/styled';

import { ShowcaseContext } from '../context';

const DOTS_DIMENSION_SIZE = 10;

const ControlDots = ({ className }: StyledProp) => {
  const { totalSteps, currentStep } = useContext(ShowcaseContext);

  const dots = Array(totalSteps).fill(0);

  return (
    <div className={className}>
      {dots.map((_, index) => {
        const activeDot = currentStep - 1 === index;

        return <span key={`dot-${index}`} className={cx('hst-dots', `${activeDot && '---hst-dots-active'}`)} />;
      })}
    </div>
  );
};

export default styled(ControlDots, { label: 'hst-control-dots' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};

    & .hst-dots {
      height: ${theme.pxToRem(DOTS_DIMENSION_SIZE)}rem;
      width: ${theme.pxToRem(DOTS_DIMENSION_SIZE)}rem;
      margin-right: ${theme.pxToRem(DOTS_DIMENSION_SIZE)}rem;
      background-color: #fff;
      border: solid 1px #bbb;
      border-radius: 50%;
      display: inline-block;
    }

    & .---hst-dots-active {
      background-color: ${theme.brandColor.primary.medium};
      border: none;
      border-radius: 50%;
    }
  `}
`;
