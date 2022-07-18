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

const IconButton = ({ className, size, children, disabled = false, active, ...rest }: IconButtonProps) => (
  <button
    role='button'
    disabled={disabled}
    className={cx(className, `--${size ?? 'lg'}`, { '--active': active })}
    aria-disabled={disabled}
    {...rest}
  >
    <div className={cx('__icon', `--${size ?? 'lg'}`, { '--disabled': disabled })}>{children}</div>
  </button>
);

const LG_SIZE = 48;
const LG_ICON_SIZE = 24;

const MD_SIZE = 32;
const MD_ICON_SIZE = 16;

export default React.memo(styled(IconButton, { label: 'houston-icon-button' })`
  ${({ theme }) => css`
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

    &.--lg,
    &.--large {
      width: ${theme.pxToRem(LG_SIZE)}rem;
      height: ${theme.pxToRem(LG_SIZE)}rem;
    }

    &.--md,
    &.--medium,
    &.--small {
      width: ${theme.pxToRem(MD_SIZE)}rem;
      height: ${theme.pxToRem(MD_SIZE)}rem;
    }

    &:disabled {
      cursor: default;
    }

    .__icon {
      display: flex;
      align-items: center;
      justify-content: center;

      &.--disabled {
        color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
      }

      &.--lg,
      &.--large {
        width: ${theme.pxToRem(LG_ICON_SIZE)}rem;
        height: ${theme.pxToRem(LG_ICON_SIZE)}rem;

        > svg {
          vertical-align: middle;
          font-size: ${theme.pxToRem(LG_ICON_SIZE)}rem;
        }
      }

      &.--md,
      &.--medium,
      &.--small {
        width: ${theme.pxToRem(MD_ICON_SIZE)}rem;
        height: ${theme.pxToRem(MD_ICON_SIZE)}rem;

        > svg {
          vertical-align: middle;
          font-size: ${theme.pxToRem(MD_ICON_SIZE)}rem;
        }
      }
    }

    &:focus {
      outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
    }

    &:hover:not(:disabled),
    &:focus,
    &.--active {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
    }
  `}
`);
