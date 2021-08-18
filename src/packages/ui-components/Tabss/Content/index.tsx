import * as React from 'react';

export interface ITabsContentProps {
  children: React.ReactNode;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  disablePadding?: boolean;
}

export default (() => null) as React.FC<ITabsContentProps>;
