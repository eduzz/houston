import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export type ProgressFormat = 'percentage' | 'text';

export type ProgressInfoPosition = 'left' | 'right';

export interface ProgressBarProps {
  value: number;
  max: number;
  min: number;
}

const ProgressBar = ({ className, value, min, max }: ProgressBarProps & StyledProp) => {
  return (
    <div className={cx(className, 'hst-progress__bar')}>
      <span
        className='hst-progress-bar__filled'
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
    height: 8px;
    border-radius: ${theme.border.radius.pill};
    overflow: hidden;

    & > .hst-progress-bar__filled {
      height: 100%;
      display: block;
      background-color: ${theme.feedbackColor.positive.pure};
      border-radius: ${theme.border.radius.pill};
      transition: width 300ms linear;
    }
  `}
`;

export default ProgressBarWrapper;
