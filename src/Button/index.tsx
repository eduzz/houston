import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';

import React from 'react';

interface IButtonProps extends Partial<ButtonProps> {
  /**
   * Use case
   *
   * `primary` button contained
   *
   * `secondary` button outlined
   *
   * `text` button text
   */
  context: 'primary' | 'secondary' | 'text';
}

const Button = React.forwardRef<unknown, IButtonProps>((props, ref) => {
  const { className, children, style, onClick, disabled, startIcon, context, href, endIcon, fullWidth } = props;
  const buttonProps = { className, style, onClick, disabled, startIcon, href, endIcon, fullWidth };

  switch (context) {
    case 'primary':
      return (
        <ButtonMUI {...buttonProps} variant='contained' color='primary' ref={() => ref}>
          {children}
        </ButtonMUI>
      );

    case 'secondary':
      return (
        <ButtonMUI {...buttonProps} variant='outlined' color='primary' ref={() => ref}>
          {children}
        </ButtonMUI>
      );

    default:
    case 'text':
      return (
        <ButtonMUI {...buttonProps} variant='text' color='primary' ref={() => ref}>
          {children}
        </ButtonMUI>
      );
  }
});

export default Button;
