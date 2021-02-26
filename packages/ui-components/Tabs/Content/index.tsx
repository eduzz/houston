import * as React from 'react';

export interface ITabsContentProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

export default React.memo<ITabsContentProps>(() => null);
