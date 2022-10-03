import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import Spinner from '../Loaders/Spinner';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement>,
    StyledProp {
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  /**
   * If button should be on active state
   */
  active?: boolean;
}

/**
 * @deprecated Use Button from Antd
 * https://ant.design/components/button/
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      startIcon,
      endIcon,
      variant,
      loading = false,
      className,
      fullWidth,
      active,
      type = 'button',
      ...rest
    },
    ref
  ) => (
    <button
      ref={ref}
      role='button'
      className={cx(className, 'hst-button', `hst-button-variant-${variant ?? 'contained'}`, {
        'hst-button-full-width': fullWidth,
        'hst-button-disabled': disabled || loading,
        'hst-button-active': active
      })}
      type={type}
      {...rest}
      disabled={disabled || loading}
      aria-disabled={disabled}
    >
      {!!startIcon && (
        <span className={cx('hst-button-start-icon', { 'hst-button-hidden': loading })}>{startIcon}</span>
      )}

      {!loading && <span className='hst-button-text'>{children}</span>}

      {loading && (
        <>
          <span className='hst-button-loader'>
            <Spinner size={20} color='inherit' />
          </span>
          <span className='hst-button-text hst-button-hidden'>{children}</span>
        </>
      )}

      {!!endIcon && <span className={cx('hst-button-end-icon', { 'hst-button-hidden': loading })}>{endIcon}</span>}
    </button>
  )
);

const HEIGHT = 48;
const MIN_WIDTH = 96;
const ICON_SIZE = 24;

export default styled(Button, { label: 'hst-button' })(({ theme }) => {
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
    display: inline-flex;
    align-items: center;
    justify-content: center;

    :not(:focus) {
      transition: 0.3s;
    }

    :focus,
    .hst-button-active {
      outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
    }

    &.hst-button-variant-contained {
      background-color: ${theme.brandColor.primary.pure};
      color: ${theme.neutralColor.high.pure};

      &:hover:not(:disabled),
      &:focus,
      &.hst-button-active {
        background-color: ${theme.hexToRgba(theme.brandColor.primary.pure, theme.opacity.level[8])};
      }
    }

    &.hst-button-variant-outlined {
      background-color: transparent;
      border: ${theme.border.width.xs} solid;
      border-color: ${theme.neutralColor.low.pure};
      color: ${theme.neutralColor.low.pure};

      &:hover:not(:disabled),
      &:focus,
      &.hst-button-active {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.hst-button-variant-text {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      color: ${theme.neutralColor.low.pure};

      &:hover:not(:disabled),
      &:focus,
      &.hst-button-active {
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      }
    }

    &.hst-button-disabled {
      border: none;
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
      cursor: not-allowed;
    }

    &.hst-button-full-width {
      width: 100%;
    }

    & > .hst-button-loader {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }

    & > .hst-button-hidden {
      visibility: hidden;
    }

    & > .hst-button-start-icon {
      margin-right: ${theme.spacing.inline.nano};
    }

    & > .hst-button-end-icon {
      margin-left: ${theme.spacing.inline.nano};
    }

    & > .hst-button-start-icon,
    & > .hst-button-end-icon {
      line-height: 0;

      svg {
        vertical-align: middle;
        font-size: ${theme.pxToRem(ICON_SIZE)}rem;
      }
    }
  `;
});
