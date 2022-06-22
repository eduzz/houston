import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import Spinner from '../Spinner';

export type IButtonVariant = 'contained' | 'outlined' | 'text';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement>,
    IStyledProp {
  variant?: IButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = ({
  children,
  disabled = false,
  startIcon,
  endIcon,
  variant,
  loading = false,
  className,
  fullWidth,
  ...rest
}: IButtonProps) => (
  <button
    role='button'
    className={cx(className, `--${variant ?? 'contained'}`, { '--fullWidth': fullWidth }, { '--disabled': disabled })}
    {...rest}
    disabled={disabled || loading}
    aria-disabled={disabled}
  >
    {!!startIcon && <span className={cx('__startIcon', { '--hidden': loading })}>{startIcon}</span>}
    {!loading && <span className='__text'>{children}</span>}
    {loading && (
      <>
        <span className='__loader'>
          <Spinner size={20} color='inherit' />
        </span>
        <span className='__text --hidden'>{children}</span>
      </>
    )}
    {!!endIcon && <span className={cx('__endIcon', { '--hidden': loading })}>{endIcon}</span>}
  </button>
);

const HEIGHT = 48;
const MIN_WIDTH = 96;
const ICON_SIZE = 24;

export default styled(Button, { label: 'houston-button' })(({ theme }) => {
  return css`
    border: none;
    cursor: pointer;
    text-transform: none;
    height: ${theme.pxToRem(HEIGHT)}rem;
    min-width: ${theme.pxToRem(MIN_WIDTH)}rem;
    padding: ${theme.spacing.squish.xxs};
    border-radius: ${theme.border.radius.xs};
    font-weight: ${theme.font.weight.semibold};
    font-family: ${theme.font.family.base};
    line-height: ${theme.line.height.default};
    font-size: ${theme.font.size.xs};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    :not(:focus) {
      transition: 0.3s;
    }

    :focus {
      outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
    }

    &.--contained {
      background-color: ${theme.brandColor.primary.pure};
      color: ${theme.neutralColor.high.pure};

      &:hover:not(:disabled),
      &:focus {
        background-color: ${theme.hexToRgba(theme.brandColor.primary.pure, theme.opacity.level[8])};
      }
    }

    &.--outlined {
      background-color: transparent;
      border: ${theme.border.width.xs} solid;
      border-color: ${theme.neutralColor.low.pure};
      color: ${theme.neutralColor.low.pure};

      &:hover:not(:disabled),
      &:focus {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.--text {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      color: ${theme.neutralColor.low.pure};

      &:hover:not(:disabled),
      &:focus {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.--disabled {
      border: none;
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
      cursor: default;
    }

    &.--fullWidth {
      width: 100%;
    }

    & > .__loader {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }

    & > .--hidden {
      visibility: hidden;
    }

    & > .__startIcon {
      margin-right: ${theme.spacing.inline.nano};
    }

    & > .__endIcon {
      margin-left: ${theme.spacing.inline.nano};
    }

    & > .__startIcon,
    & > .__endIcon {
      line-height: 0;
    }

    & > .__startIcon > svg,
    & > .__endIcon > svg {
      vertical-align: middle;
      font-size: ${theme.pxToRem(ICON_SIZE)}rem;
    }
  `;
});
