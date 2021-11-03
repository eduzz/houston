import * as React from 'react';

import IconButtonMUI, { IconButtonProps } from '@mui/material/IconButton';

type ButtonPropsExtends = 'id' | 'disabled' | 'children' | 'onClick' | 'className' | 'size' | 'color';

export interface IButtonProps extends Pick<IconButtonProps, ButtonPropsExtends> {}

const IconButton = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const { children, color = 'default', ...rest } = props;

  return (
    <IconButtonMUI {...rest} color={color} disableTouchRipple ref={ref}>
      {children}
    </IconButtonMUI>
  );
});

export default React.memo(IconButton);
