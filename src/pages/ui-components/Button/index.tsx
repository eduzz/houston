import * as React from 'react';

import { getColorFallback } from '../Helpers/functions';
import Spinner from '../Spinner';
import styled, { cx } from '../styles/styled';

export type IButtonVariant = 'contained' | 'outlined' | 'text';
export type IButtonColor = 'primary' | 'success' | 'error' | 'info' | 'warning';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement> {
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
  border-radius: ${props => props.theme.radius()}px;
  font-weight: ${props => props.theme.fontWeight('semibold')};
  font-family: ${props => props.theme.fontFamily};
  line-height: ${props => props.theme.lineHeight('compact')};
  font-size: ${props => props.theme.textSize('small')}px;
  position: relative;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &.--fullWidth {
    width: 100%;
  }

  &.--contained {
    background-color: ${props => getColorFallback(props.theme, props.color).main};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${props => getColorFallback(props.theme, props.color).light};
    }

    &:active:not(:disabled) {
      background-color: ${props => getColorFallback(props.theme, props.color).dark};
    }

    &:disabled {
      background-color: ${props => props.theme.colors.grey[300]};
    }
  }

  &.--outlined {
    background-color: transparent;
    color: ${props => getColorFallback(props.theme, props.color).main};
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
    color: ${props => getColorFallback(props.theme, props.color).main};

    &:hover:not(:disabled),
    &:active:not(:disabled) {
      background-color: ${props => props.theme.colors.grey[200]};
    }
  }

  &:disabled {
    cursor: default;
    color: ${props => props.theme.colors.grey[500]};
    border-color: ${props => props.theme.colors.grey[300]};
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
    border-radius: ${props => props.theme.radius(2)}px;
  }

  &:focus:not(:active):not(:hover):before {
    border-color: ${props => props.theme.colors.grey[300]};
  }

  & > .__loader {
    margin-right: ${props => props.theme.spacing(2)};
  }

  & > .__startIcon {
    margin-right: ${props => props.theme.spacing(2)};
  }

  & > .__endIcon {
    margin-left: ${props => props.theme.spacing(2)};
  }

  & > .__startIcon > svg,
  & > .__endIcon > svg {
    vertical-align: middle;
    font-size: 17px;
  }
`;
