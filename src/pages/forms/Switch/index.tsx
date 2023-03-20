import * as React from 'react';

import { Switch as AndtSwitch, SwitchProps as AntdSwitchProps, Typography } from 'antd';
import type { SwitchChangeEventHandler } from 'antd/es/switch/index';

import styled, { StyledProp } from '@eduzz/houston-ui/styled';

import withForm, { WithFormProps } from '../Form/withForm';

export interface SwitchProps
  extends Omit<AntdSwitchProps, 'onChange' | 'value'>,
    WithFormProps<HTMLInputElement>,
    StyledProp {
  value?: any;
  onChange?: (value: any) => void;
  checkedValue?: any;
  children?: React.ReactNode;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ value, onChange, checkedValue = true, children, className, ...props }, ref) => {
    const handleChange: SwitchChangeEventHandler = React.useCallback(
      checked => {
        const newValue = checked ? checkedValue : typeof checkedValue === 'boolean' ? !checkedValue : null;
        onChange?.(newValue);
      },
      [checkedValue, onChange]
    );

    return (
      <div className={className}>
        <AndtSwitch ref={ref} checked={value === checkedValue} {...props} onChange={handleChange} />
        <div>{typeof children === 'string' ? <Typography.Text>{children}</Typography.Text> : children}</div>
      </div>
    );
  }
);

const SwitchStyled = styled(Switch)`
  display: flex;
  gap: ${({ theme }) => theme.antd.sizeUnit * 2}px;
  align-items: flex-start;
`;

export default withForm(SwitchStyled, { disableMargin: true });
