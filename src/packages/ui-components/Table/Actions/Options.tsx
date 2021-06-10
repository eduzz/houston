import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableActionContext from './context';

export interface ITableActionOptionProp {
  children: React.ReactNode;
  onClick: (data: unknown, index?: number) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  order?: number;
}

const TableActionOption = React.memo<ITableActionOptionProp>(({ children, disabled, onClick, order, icon }) => {
  const registerOption = useContextSelector(TableActionContext, context => context.registerOption);

  React.useEffect(() => {
    console.log('register 2');
    const unregister = registerOption({ disabled, onClick, icon, content: children });
    return () => unregister();
  }, [children, disabled, onClick, icon, order, registerOption]);

  return null;
});

export default TableActionOption;
