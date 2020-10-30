import * as React from 'react';

import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import WrapperTheme from '../ThemeProvider/WrapperTheme';

const variantMap = {
  primary: 'contained',
  secondary: 'outlined'
};

type ButtonPropsExtends =
  | 'id'
  | 'className'
  | 'style'
  | 'onClick'
  | 'disabled'
  | 'startIcon'
  | 'href'
  | 'endIcon'
  | 'children'
  | 'fullWidth';

export type IButtonType = 'primary' | 'secondary' | 'text';

export interface IButtonProps extends Pick<ButtonProps, ButtonPropsExtends> {
  /**
   * Use case
   *
   * `primary` button contained
   * `secondary` button outlined
   * `text` button text
   */
  type?: IButtonType;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    className,
    children,
    style,
    onClick,
    disabled = false,
    startIcon,
    type = 'primary',
    href,
    endIcon,
    fullWidth = false,
    id,
    loading = false
  } = props;

  const buttonProps = { className, style, onClick, disabled, startIcon, href, endIcon, fullWidth, id };
  const variant = variantMap[type] || 'text';

  return (
    <WrapperTheme>
      <ButtonMUI
        {...buttonProps}
        disabled={disabled || loading ? true : false}
        startIcon={loading ? <CircularProgress size={18} color='inherit' /> : startIcon}
        endIcon={loading ? null : endIcon}
        variant={variant}
        color='primary'
        ref={ref}
      >
        {children}
      </ButtonMUI>
    </WrapperTheme>
  );
});

export default React.memo(Button);
