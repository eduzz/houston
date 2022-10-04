import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export type ProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  max: number;
  min: number;
};

const ProgressBar = ({ className, value, min, max, ...rest }: ProgressBarProps & StyledProp) => {
  return (
    <div className={cx(className, 'hst-progress-bar')} {...rest}>
      <span
        className='hst-progress-bar-filled'
        style={{ width: `${value > 0 ? value : 0}%` }}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        role='progressbar'
      />
    </div>
  );
};

const ProgressBarWrapper = styled(ProgressBar, { label: 'hst-progress-bar' })`
  ${({ theme }) => css`
    background-color: ${theme.neutralColor.high.medium};
    width: 100%;
    border-radius: ${theme.border.radius.pill};
    overflow: hidden;

    & > .hst-progress-bar-filled {
      height: 100%;
      display: block;
      background-color: ${theme.feedbackColor.positive.pure};
      border-radius: ${theme.border.radius.pill};
      transition: width 300ms linear;
    }
  `}
`;

/**
 * @deprecated Use Progress from Antd
 * https://ant.design/components/progress/
 */
export default ProgressBarWrapper;
