import * as React from 'react';

import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';

type ButtonPropsExtends =
  | 'id'
  | 'onClick'
  | 'disabled'
  | 'href'
  | 'children'
  | 'type'
  | 'className'
  | 'fullWidth'
  | 'startIcon'
  | 'endIcon';

export type IButtonVariant = 'contained' | 'outlined' | 'text';

export interface IButtonProps extends Pick<ButtonProps, ButtonPropsExtends>, React.RefAttributes<HTMLButtonElement> {
  variant?: IButtonVariant;
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    disabled = false,
    variant = 'contained',
    startIcon,
    loading = false,
    loadingText,
    ...buttonProps
  } = props;

  return (
    <ButtonMUI
      {...buttonProps}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={18} color='inherit' /> : startIcon}
      disableRipple
      disableFocusRipple
      disableElevation
      disableTouchRipple
      variant={variant}
      color='primary'
      ref={ref}
    >
      {!loading && children}
      {loading && (loadingText ?? children)}
    </ButtonMUI>
  );
});

export default withHoustonTheme(React.memo(Button));
