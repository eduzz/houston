import * as React from 'react';

import AntdButton from 'antd/lib/button';

import styled, { StyledProp } from '@eduzz/houston-styles';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.RefAttributes<HTMLButtonElement>,
    StyledProp {
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  /**
   * If button should be on active state
   */
  active?: boolean;
}

/**
 * @deprecated Use Button from Antd
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, startIcon, endIcon, variant = 'contained', fullWidth, active, type = 'button', ...rest }, ref) => (
    <AntdButton
      ref={ref}
      icon={startIcon}
      type={variant === 'contained' ? 'primary' : variant === 'outlined' ? 'default' : 'text'}
      htmlType={type}
      {...rest}
    >
      {children}
    </AntdButton>
  )
);

export default styled(Button)`
  & > svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    margin-top: -4px;
  }
`;
