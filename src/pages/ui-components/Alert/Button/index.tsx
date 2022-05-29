import * as React from 'react';

import Button, { IButtonProps } from '../../Button';

export interface IAlertButtonProps extends IButtonProps {
  children?: React.ReactNode;
}

const AlertButton = ({ children, ...rest }: IAlertButtonProps) => (
  <div className='__action'>
    <Button {...rest}>{children}</Button>
  </div>
);

export default AlertButton;
