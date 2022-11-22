import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

type Size =
  | 'md'
  | 'lg'

  /** @deprecated */
  | 'small'

  /** @deprecated */
  | 'medium'

  /** @deprecated */
  | 'large';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement>,
    StyledProp {
  /** use md or lg, the other options are deprecated */
  size?: Size;
  /**
   * If button should be on active state
   */
  active?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size, children, disabled = false, active, ...rest }, ref) => (
    <button
      role='button'
      disabled={disabled}
      className={cx(className, `hst-icon-button-size-${size ?? 'lg'}`, { 'hst-icon-button-active': active })}
      aria-disabled={disabled}
      {...rest}
      ref={ref}
    >
      <div
        className={cx('hst-icon-button', `hst-icon-button-size-${size ?? 'lg'}`, {
          'hst-icon-button-disabled': disabled
        })}
      >
        {children}
      </div>
    </button>
  )
);

const LG_SIZE = 48;
const LG_ICON_SIZE = 24;

const MD_SIZE = 32;
const MD_ICON_SIZE = 16;

/**
 * @deprecated Use Button with icon prop from Antd
 * https://ant.design/components/button/
 */
export default styled(IconButton, { label: 'hst-icon-button' })(
  ({ theme }) => css`
    border: none;
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
    border-radius: ${theme.border.radius.circular};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    :not(:focus) {
      transition: 0.3s;
    }

    &.hst-icon-button-size-lg,
    &.hst-icon-button-size-large {
      width: ${theme.pxToRem(LG_SIZE)}rem;
      height: ${theme.pxToRem(LG_SIZE)}rem;
    }

    &.hst-icon-button-size-md,
    &.hst-icon-button-size-medium,
    &.hst-icon-button-size-small {
      width: ${theme.pxToRem(MD_SIZE)}rem;
      height: ${theme.pxToRem(MD_SIZE)}rem;
    }

    &:disabled {
      cursor: default;
    }

    .hst-icon-button {
      display: flex;
      align-items: center;
      justify-content: center;

      &.hst-icon-button-disabled {
        fill: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
        color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
      }

      &.hst-icon-button-size-lg,
      &.hst-icon-button-size-large {
        width: ${theme.pxToRem(LG_ICON_SIZE)}rem;
        height: ${theme.pxToRem(LG_ICON_SIZE)}rem;

        > svg {
          vertical-align: middle;
          font-size: ${theme.pxToRem(LG_ICON_SIZE)}rem;
        }
      }

      &.hst-icon-button-size-md,
      &.hst-icon-button-size-medium,
      &.hst-icon-button-size-small {
        width: ${theme.pxToRem(MD_ICON_SIZE)}rem;
        height: ${theme.pxToRem(MD_ICON_SIZE)}rem;

        > svg {
          vertical-align: middle;
          font-size: ${theme.pxToRem(MD_ICON_SIZE)}rem;
        }
      }
    }

    &:hover:not(:disabled),
    &:focus,
    &.hst-icon-button-active {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }
  `
);
