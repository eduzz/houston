import * as React from 'react';

import { getColorFallback } from '../Helpers/functions';
import styled, { IStyledProp, keyframes } from '../styles/styled';

export interface ILoaderProps extends IStyledProp {
  size?: number;
  color?: 'primary' | 'success' | 'error' | 'info' | 'warning' | 'inherit';
}

const SIZE_BASE = 65;
const CIRCLE_SIZE_BASE = 30;

const Spinner: React.FC<ILoaderProps> = ({ className, size }) => {
  size = size ?? 65;
  const round = ((size ?? 65) / SIZE_BASE) * CIRCLE_SIZE_BASE;

  return (
    <svg className={className} width={`${size}px`} height={`${size}px`} viewBox={`0 0 ${size + 1} ${size + 1}`}>
      <circle fill='none' strokeLinecap='round' cx={round + round * 0.1} cy={round + round * 0.1} r={round}></circle>
    </svg>
  );
};

const rotationAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

const circleAnimation = (props: ILoaderProps) => keyframes`
  0% { stroke-dashoffset: ${((props.size ?? 65) / SIZE_BASE) * 187}; }
  50% { stroke-dashoffset: ${((props.size ?? 65) / SIZE_BASE) * 46.75}; transform: rotate(135deg); }
  100% { stroke-dashoffset: ${((props.size ?? 65) / SIZE_BASE) * 187}; transform: rotate(450deg); }
`;

export default styled(Spinner, { label: 'houston-loader' })`
  animation: ${rotationAnimation} 1.4s linear infinite;
  color: ${props => (props.color === 'inherit' ? 'inherit' : getColorFallback(props.theme, props.color).main)};

  & > circle {
    stroke: currentColor;
    stroke-width: ${props => ((props.size ?? 65) / SIZE_BASE) * 6};
    stroke-dasharray: ${props => ((props.size ?? 65) / SIZE_BASE) * 187};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${props => circleAnimation(props)} 1.4s ease-in-out infinite;
  }
`;
