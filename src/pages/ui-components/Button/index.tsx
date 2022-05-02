import * as React from 'react';

import styled, { cx, IStyledProp } from '@eduzz/houston-styles';

import { getColorFallback } from '../Helpers/functions';
import Spinner from '../Spinner';

export type IButtonVariant = 'contained' | 'outlined' | 'text';
export type IButtonColor = 'positive' | 'negative' | 'warning' | 'informative' | 'primary';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement>,
    IStyledProp {
  variant?: IButtonVariant;
  loading?: boolean;
  loadingText?: string;
  color?: IButtonColor;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = props => {
  const {
    children,
    disabled = false,
    startIcon,
    endIcon,
    variant,
    loading = false,
    loadingText,
    className,
    fullWidth,
    ...rest
  } = props;

  return (
    <button
      className={cx(className, `--${variant ?? 'contained'}`, { '--fullWidth': fullWidth })}
      {...rest}
      disabled={disabled || loading}
    >
      {!!startIcon && !loading && <span className='__startIcon'>{startIcon}</span>}
      {!loading && <span className='__text'>{children}</span>}
      {loading && (
        <>
          <Spinner size={15} color='inherit' className='__loader' />
          <span className='__text'>{loadingText ?? children}</span>
        </>
      )}
      {!!endIcon && <span className='__endIcon'>{endIcon}</span>}
    </button>
  );
};

export default styled(Button, { label: 'houston-button' })`
  border: none;
  cursor: pointer;
  text-transform: none;
  padding: 10px 16px;
  height: 40px;
  border-radius: ${props => props.theme.border.radius.xs};
  font-weight: ${props => props.theme.font.weight.bold};
  font-family: ${props => props.theme.font.family.base};
  line-height: ${props => props.theme.line.height.default};
  font-size: ${props => props.theme.font.size.xxs};
  position: relative;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &.--fullWidth {
    width: 100%;
  }

  &.--contained {
    background-color: ${props => getColorFallback(props.theme, props.color).pure};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${props => getColorFallback(props.theme, props.color).light};
    }

    &:active:not(:disabled) {
      background-color: ${props => getColorFallback(props.theme, props.color).dark};
    }

    &:disabled {
      background-color: ${props => props.theme.neutralColor.high.medium};
    }
  }

  &.--outlined {
    background-color: transparent;
    color: ${props => getColorFallback(props.theme, props.color).pure};
    border: 1px solid;
    border-color: ${props => getColorFallback(props.theme, props.color).light};

    &:hover:not(:disabled),
    &:active:not(:disabled) {
      border-color: ${props => getColorFallback(props.theme, props.color).dark};
      color: ${props => getColorFallback(props.theme, props.color).dark};
    }
  }

  &.--text {
    background-color: transparent;
    color: ${props => getColorFallback(props.theme, props.color).pure};

    &:hover:not(:disabled),
    &:active:not(:disabled) {
      background-color: ${props => props.theme.neutralColor.high.light};
    }
  }

  &:disabled {
    cursor: default;
    color: ${props => props.theme.neutralColor.low.medium};
    border-color: ${props => props.theme.neutralColor.high.medium};
  }

  &:before {
    content: ' ';
    position: absolute;
    left: -4px;
    right: -4px;
    top: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    transition: 0.3s;
    border-radius: ${props => props.theme.border.radius.sm};
  }

  &:focus:not(:active):not(:hover):before {
    border-color: ${props => props.theme.neutralColor.high.medium};
  }

  & > .__loader {
    margin-right: ${props => props.theme.spacing.nano};
  }

  & > .__startIcon {
    margin-right: ${props => props.theme.spacing.nano};
  }

  & > .__endIcon {
    margin-left: ${props => props.theme.spacing.nano};
  }

  & > .__startIcon > svg,
  & > .__endIcon > svg {
    vertical-align: middle;
    font-size: 17px;
  }
`;
