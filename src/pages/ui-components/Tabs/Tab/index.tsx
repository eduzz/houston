import * as React from 'react';

import styled, { StyledProp } from '@eduzz/houston-styles';

export interface TabProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  label: string;
}

const Tab = ({ children, label, ...rest }: TabProps) => {
  return (
    <div {...rest}>
      <div>{label}</div>
      {children}
    </div>
  );
};

const TabWrapper = React.memo(styled(Tab, { label: 'houston-tabs-tab' })``);

export default TabWrapper;
