import { useMemo } from 'react';

import { css, cx, keyframes } from '@emotion/css';
import styled from '@emotion/styled';

export interface LineLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'determinate' | 'indeterminate';
  /**
   * 0 to 1. Ex: 0.2 = 20%
   */
  value?: number;
}

const LineLoader = ({ className, mode = 'indeterminate', value, ...rest }: LineLoaderProps) => {
  const style = useMemo(() => (mode === 'determinate' ? { width: `${(value ?? 0) * 100}%` } : {}), [value, mode]);

  return (
    <div className={cx(className, `hst-line-loader-mode-${mode}`)} {...rest}>
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
    height: 4px;
    background-color: ${theme.hexToRgba(theme.primaryColor, 0.25)};

    & > div {
      background-color: ${theme.primaryColor};
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
