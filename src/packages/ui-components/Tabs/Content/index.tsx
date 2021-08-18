import * as React from 'react';

import MUITab from '@material-ui/core/Tab';
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

const Content: React.FC<ITabsContentProps> = ({ icon, id, className, children, ...rest }) => {
  const registerTabs = useContextSelector(TabsContext, context => context.registerTabs);

  React.useEffect(() => {
    const unregister = registerTabs({ id, children, className });
    return () => unregister();
  }, [children, className, id, registerTabs]);

  return <MUITab disableRipple icon={icon as React.ReactElement} id={id ? `tab-${id}` : null} {...rest} />;
};

export default React.memo(Content);
