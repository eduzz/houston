import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

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
      role='button'
      className={cx(className, `--${variant ?? 'contained'}`, { '--fullWidth': fullWidth }, { '--disabled': disabled })}
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

const MIN_HEIGHT = 48;
const MIN_WIDTH = 140;

export default styled(Button, { label: 'houston-button' })(({ theme }) => {
  return css`
    border: none;
    cursor: pointer;
    text-transform: none;
    min-height: ${theme.pxToRem(MIN_HEIGHT)}rem;
    min-width: ${theme.pxToRem(MIN_WIDTH)}rem;
    padding: ${theme.spacing.squish.xs};
    border-radius: ${theme.border.radius.xs};
    font-weight: ${theme.font.weight.semibold};
    font-family: ${theme.font.family.base};
    line-height: ${theme.line.height.default};
    font-size: ${theme.font.size.xs};
    background-color: ${theme.brandColor.primary.pure};
    color: ${theme.neutralColor.high.pure};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--fullWidth {
      width: 100%;
    }

    &.--disabled {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
      cursor: default;
    }

    &.--outlined {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      border: 1px solid;
      border-color: ${theme.neutralColor.low.pure};
      color: ${theme.neutralColor.low.pure};
    }

    &.--text {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      border: none;
      color: ${theme.neutralColor.low.pure};
    }

    &.--contained {
      &:hover:not(:disabled) {
        background-color: ${theme.hexToRgba(theme.brandColor.primary.pure, theme.opacity.level[8])};
        transition: 0.3s background-color;
      }
      &:focus {
        background-color: ${theme.hexToRgba(theme.brandColor.primary.pure, theme.opacity.level[8])};
      }
    }

    :focus {
      outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
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
