import * as React from 'react';

import IconButtonMUI, { IconButtonProps } from '@material-ui/core/IconButton';

import WrapperTheme from '../ThemeProvider/WrapperTheme';

type ButtonPropsExtends = 'disabled' | 'children' | 'onClick';

export interface IButtonProps extends Pick<IconButtonProps, ButtonPropsExtends> {}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, disabled = false, ...otherProps } = props;

  return (
    <WrapperTheme>
      <IconButtonMUI {...otherProps} color='primary' disabled={disabled} disableTouchRipple ref={ref}>
        {children}
      </IconButtonMUI>
    </WrapperTheme>
  );
});

export default React.memo(Button);
