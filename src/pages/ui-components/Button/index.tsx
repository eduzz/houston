import * as React from 'react';

import ButtonMUI, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

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

const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  variant = 'contained',
  startIcon,
  loading = false,
  loadingText,
  ...rest
}) => {
  return (
    <ButtonMUI
      {...rest}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={18} color='inherit' /> : startIcon}
      disableRipple
      disableFocusRipple
      disableElevation
      disableTouchRipple
      variant={variant}
      color='primary'
    >
      {!loading && children}
      {loading && (loadingText ?? children)}
    </ButtonMUI>
  );
};

export default React.memo(Button);
