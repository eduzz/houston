import { useContextSelector } from 'use-context-selector';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles/styled';

import { ShowcaseContext } from '../context';

const DOTS_DIMENSION_SIZE = 10;

const ControlDots = ({ className }: StyledProp) => {
  const currentStep = useContextSelector(ShowcaseContext, context => context.currentStep);
  const controlDots = useContextSelector(ShowcaseContext, context => context.controlDots);
  const totalSteps = useContextSelector(ShowcaseContext, context => context.totalSteps);

  if (!controlDots) {
    return null;
  }

  const dots = Array(totalSteps).fill(0);

  return (
    <div className={className}>
      {dots.map((_, index) => {
        const activeDot = currentStep - 1 === index;

        return (
          <span
            key={`dot-${index}`}
            className={cx('hst-showcase-control-dots', `${activeDot && 'hst-showcase-control-dots-active'}`)}
          />
        );
      })}
    </div>
  );
};

export default styled(ControlDots, { label: 'hst-showcase-control-dots' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};

    & .hst-showcase-control-dots {
      height: ${theme.pxToRem(DOTS_DIMENSION_SIZE)}rem;
      width: ${theme.pxToRem(DOTS_DIMENSION_SIZE)}rem;
      margin-right: ${theme.pxToRem(DOTS_DIMENSION_SIZE)}rem;
      background-color: ${theme.neutralColor.high.pure};
      border: solid ${theme.border.width.xs} ${theme.neutralColor.high.dark};
      border-radius: ${theme.border.radius.circular};
      display: inline-block;
    }

    & .hst-showcase-control-dots-active {
      background-color: ${theme.brandColor.primary.pure};
      border: none;
    }
  `}
`;
