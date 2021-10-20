import * as React from 'react';

import IconButtonMUI, { IconButtonProps } from '@mui/material/IconButton';

type ButtonPropsExtends = 'id' | 'disabled' | 'children' | 'onClick' | 'className' | 'size';

export interface IButtonProps extends Pick<IconButtonProps, ButtonPropsExtends> {}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, disabled = false, ...otherProps } = props;

  return (
    <IconButtonMUI {...otherProps} color='primary' disabled={disabled} disableTouchRipple ref={ref}>
      {children}
    </IconButtonMUI>
  );
});

export default React.memo(Button);
