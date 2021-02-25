import * as React from 'react';

import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import WrapperTheme from '../ThemeProvider/WrapperTheme';

type ButtonPropsExtends =
  | 'id'
  | 'onClick'
  | 'disabled'
  | 'href'
  | 'children'
  | 'type'
  | 'fullWidth'
  | 'startIcon'
  | 'endIcon';

export type IButtonVariant = 'contained' | 'outlined' | 'text';

export interface IButtonProps extends Pick<ButtonProps, ButtonPropsExtends> {
  /**
   * Use case
   *
   * `primary` button contained
   * `secondary` button outlined
   * `text` button text
   */
  variant?: IButtonVariant;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, disabled = false, variant = 'contained', startIcon, loading = false, ...buttonProps } = props;
  console.log('vutton', ButtonMUI);
  return (
    <WrapperTheme>
      <ButtonMUI
        {...buttonProps}
        disabled={disabled || loading ? true : false}
        startIcon={loading ? <CircularProgress size={18} color='inherit' /> : startIcon}
        disableRipple
        disableFocusRipple
        disableElevation
        disableTouchRipple
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
