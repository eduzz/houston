import styled, { StyledProp, keyframes, css } from '@eduzz/houston-styles';

import getColorFallback from '../../utils/getColorFallback';

export type SpinnerProps = StyledProp &
  React.HTMLAttributes<HTMLOrSVGElement> & {
    size?: number;
    color?: 'positive' | 'negative' | 'warning' | 'informative' | 'primary' | 'inherit';
  };

const SIZE_BASE = 65;
const CIRCLE_SIZE_BASE = 30;

const Spinner = ({ className, size = SIZE_BASE, ...rest }: SpinnerProps) => {
  const round = (size / SIZE_BASE) * CIRCLE_SIZE_BASE;

  return (
    <svg
      className={className}
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${size + 1} ${size + 1}`}
      {...rest}
    >
      <circle fill='none' strokeLinecap='round' cx={round + round * 0.1} cy={round + round * 0.1} r={round}></circle>
    </svg>
  );
};

const rotationAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const circleAnimation = (size: number) => keyframes`
  0% { stroke-dashoffset: ${(size / SIZE_BASE) * 187}; }
  50% { stroke-dashoffset: ${(size / SIZE_BASE) * 46.75}; transform: rotate(135deg); }
  100% { stroke-dashoffset: ${(size / SIZE_BASE) * 187}; transform: rotate(450deg); }
`;

export default styled(Spinner, { label: 'houston-loader' })`
  ${({ theme, color, size = SIZE_BASE }) => css`
    animation: ${rotationAnimation} 1.4s linear infinite;
    color: ${color === 'inherit' ? 'inherit' : getColorFallback(theme, color).pure};

    & > circle {
      stroke: currentColor;
      stroke-width: ${(size / SIZE_BASE) * 6};
      stroke-dasharray: ${(size / SIZE_BASE) * 187};
      stroke-dashoffset: 0;
      transform-origin: center;
      animation: ${circleAnimation(size)} 1.4s ease-in-out infinite;
    }
  `}
`;
