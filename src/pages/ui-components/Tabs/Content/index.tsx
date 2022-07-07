import * as React from 'react';

import MUITab from '@mui/material/Tab';
import { useContextSelector } from 'use-context-selector';

import TabsContext from '../context';

export interface ITabsContentProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  disablePadding?: boolean;
}

const Content: React.FC<ITabsContentProps> = ({ icon, id, className, children, disablePadding, ...rest }) => {
  const registerTabs = useContextSelector(TabsContext, context => context.registerTabs);

  React.useEffect(() => {
    const unregister = registerTabs({ id, children, className, disablePadding });
    return () => unregister();
  }, [children, className, disablePadding, id, registerTabs]);

  return <MUITab disableRipple icon={icon as any} id={id ? `tab-${id}` : undefined} {...rest} />;
};

export default React.memo(Content);
