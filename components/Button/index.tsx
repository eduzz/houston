import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';

import React from 'react';

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
   *
   * `secondary` button outlined
   *
   * `text` button text
   */
  type: 'primary' | 'secondary' | 'text';
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { className, children, style, onClick, disabled, startIcon, type, href, endIcon, fullWidth, id } = props;
  const buttonProps = { className, style, onClick, disabled, startIcon, href, endIcon, fullWidth, id };

  switch (type) {
    case 'primary':
      return (
        <ButtonMUI {...buttonProps} variant='contained' color='primary' ref={ref}>
          {children}
        </ButtonMUI>
      );

    case 'secondary':
      return (
        <ButtonMUI {...buttonProps} variant='outlined' color='primary' ref={ref}>
          {children}
        </ButtonMUI>
      );

    default:
      return (
        <ButtonMUI {...buttonProps} variant='text' color='primary' ref={ref}>
          {children}
        </ButtonMUI>
      );
  }
});

export default Button;
