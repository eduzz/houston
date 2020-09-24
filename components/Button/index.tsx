import React from 'react';

import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';

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

interface IButtonProps extends Pick<ButtonProps, ButtonPropsExtends> {
  /**
   * Use case
   *
   * `primary` button contained
   * `secondary` button outlined
   * `text` button text
   */
  type: 'primary' | 'secondary' | 'text';
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(function (props, ref) {
  const { className, children, style, onClick, disabled, startIcon, type, href, endIcon, fullWidth, id } = props;
  const buttonProps = { className, style, onClick, disabled, startIcon, href, endIcon, fullWidth, id };

  const variantMap = {
    primary: 'contained',
    secondary: 'outlined'
  };

  const variant = variantMap[type] || 'text';

  return (
    <ButtonMUI {...buttonProps} variant={variant} color='primary' ref={ref}>
      {children}
    </ButtonMUI>
  );
});

export default React.memo(Button);
