import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';
export interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement>,
    IStyledProp {
  size?: 'large' | 'medium' | 'small';
}

const IconButton: React.FC<IIconButtonProps> = props => {
  const { className, size, children, ...rest } = props;

  return (
    <button className={cx(className, `--${size ?? 'large'}`)} role='button' {...rest}>
      <div className={cx('__icon', `--${size ?? 'large'}`)}>{children}</div>
    </button>
  );
};

const LG_SIZE = 48;
const LG_ICON_SIZE = 24;

const MD_SIZE = 32;
const MD_ICON_SIZE = 16;

//1rem = 16px;
export default React.memo(styled(IconButton, { label: 'houston-icon-button' })`
  ${({ theme }) => css`
    border: none;
    background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
    border-radius: ${theme.border.radius.circular};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--large {
      width: ${theme.pxToRem(LG_SIZE)}rem;
      height: ${theme.pxToRem(LG_SIZE)}rem;
    }

    &.--medium {
      width: ${theme.pxToRem(MD_SIZE)}rem;
      height: ${theme.pxToRem(MD_SIZE)}rem;
    }

    .__icon {
      display: flex;
      align-items: center;
      justify-content: center;

      &.--large {
        width: ${theme.pxToRem(LG_ICON_SIZE)}rem;
        height: ${theme.pxToRem(LG_ICON_SIZE)}rem;

        > svg {
          vertical-align: middle;
          font-size: ${theme.pxToRem(LG_ICON_SIZE)}rem;
        }
      }

      &.--medium {
        width: ${theme.pxToRem(MD_ICON_SIZE)}rem;
        height: ${theme.pxToRem(MD_ICON_SIZE)}rem;
      }
    }

    :focus {
      outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
    }
  
    &:hover:not(:disabled), &:focus { {
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      transition: 0.3s background-color;
    }
  

  `}
`);
