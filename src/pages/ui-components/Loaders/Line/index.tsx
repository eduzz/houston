import { useMemo } from 'react';

import styled, { css, cx, keyframes, StyledProp } from '@eduzz/houston-styles';

export interface LineLoaderProps extends StyledProp {
  mode?: 'determinate' | 'indeterminate';
  /**
   * 0 to 1. Ex: 0.2 = 20%
   */
  value?: number;
}

const LineLoader = ({ className, mode = 'indeterminate', value }: LineLoaderProps) => {
  const style = useMemo(() => (mode === 'determinate' ? { width: `${(value ?? 0) * 100}%` } : {}), [value, mode]);

  return (
    <div className={cx(className, `hst-line-loader-mode-${mode}`)}>
      <div style={style} />
    </div>
  );
};

const indeterminateAnimation = keyframes`
  0% { left: -35%; right: 100%; }
  60% { left: 100%; right: -90%; }
  100% { left: 100%; right: -90%; }
`;

const indeterminateShortAnimation = keyframes`
  0% { left: -200%; right: 100%; }
  60% { left: 107%; right: -8%; }
  100% { left: 107%; right: -8%; }
`;

export default styled(LineLoader, { label: 'hst-lineloader' })(
  ({ theme }) => css`
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
    height: ${theme.pxToRem(4)}rem;
    background-color: ${theme.hexToRgba(theme.brandColor.primary.light, theme.opacity.level[5])};

    & > div {
      background-color: ${theme.brandColor.primary.pure};
    }

    &.hst-line-loader-mode-indeterminate > div {
      &:before,
      &:after {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
      }

      &:before {
        animation: ${indeterminateAnimation} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      }

      &:after {
        animation: ${indeterminateShortAnimation} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
      }
    }

    &.hst-line-loader-mode-determinate > div {
      position: absolute;
      top: 0;
      bottom: 0;
      transition: width 0.3s linear;
    }
  `
);
