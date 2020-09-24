import * as React from 'react';

import ButtonMUI, { ButtonProps } from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';

import ContextTheme from '../ThemeProvider/context';

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
  const themeContext = React.useContext(ContextTheme);

  const { className, children, style, onClick, disabled, startIcon, type, href, endIcon, fullWidth, id } = props;
  const buttonProps = { className, style, onClick, disabled, startIcon, href, endIcon, fullWidth, id };

  const variantMap = {
    primary: 'contained',
    secondary: 'outlined'
  };

  const variant = variantMap[type] || 'text';

  return (
    <ThemeProvider theme={themeContext}>
      <ButtonMUI {...buttonProps} variant={variant} color='primary' ref={ref}>
        {children}
      </ButtonMUI>
    </ThemeProvider>
  );
});

export default React.memo(Button);
