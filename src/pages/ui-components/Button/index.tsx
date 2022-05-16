import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Spinner from '../Spinner';
import getColorFallback from '../utils/getColorFallback';

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

export default styled(Button, { label: 'houston-button' })(({ theme, color: colorProp }) => {
  const color = getColorFallback(theme, colorProp);

  return css`
    border: none;
    cursor: pointer;
    text-transform: none;
    padding: 10px 16px;
    height: 40px;
    border-radius: ${theme.border.radius.xs};
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.family.base};
    line-height: ${theme.line.height.default};
    font-size: ${theme.font.size.xxs};
    position: relative;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--fullWidth {
      width: 100%;
    }

    &.--contained {
      background-color: ${color.pure};
      color: white;

      &:hover:not(:disabled) {
        background-color: ${color.light};
      }

      &:active:not(:disabled) {
        background-color: ${color.dark};
      }

      &:disabled {
        background-color: ${theme.neutralColor.high.medium};
      }
    }

    &.--outlined {
      background-color: transparent;
      color: ${color.pure};
      border: 1px solid;
      border-color: ${color.light};

      &:hover:not(:disabled),
      &:active:not(:disabled) {
        border-color: ${color.dark};
        color: ${color.dark};
      }
    }

    &.--text {
      background-color: transparent;
      color: ${color.pure};

      &:hover:not(:disabled),
      &:active:not(:disabled) {
        background-color: ${theme.neutralColor.high.light};
      }
    }

    &:disabled {
      cursor: default;
      color: ${theme.neutralColor.low.medium};
      border-color: ${theme.neutralColor.high.medium};
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
      border-radius: ${theme.border.radius.sm};
    }

    &:focus:not(:active):not(:hover):before {
      border-color: ${theme.neutralColor.high.medium};
    }

    & > .__loader {
      margin-right: ${theme.spacing.nano};
    }

    & > .__startIcon {
      margin-right: ${theme.spacing.nano};
    }

    & > .__endIcon {
      margin-left: ${theme.spacing.nano};
    }

    & > .__startIcon > svg,
    & > .__endIcon > svg {
      vertical-align: middle;
      font-size: 17px;
    }
  `;
});
