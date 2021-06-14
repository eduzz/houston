import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableRowContext from '../Row/context';

export interface ITableActionOptionProp {
  children: React.ReactNode;
  onClick: (data: unknown, index?: number) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  order?: number;
}

const TableActionOption = React.memo<ITableActionOptionProp>(({ children, disabled, onClick, order, icon }) => {
  const registerAction = useContextSelector(TableRowContext, context => context.registerAction);

  React.useEffect(() => {
    const unregister = registerAction({ disabled, onClick, icon, content: children });
    return () => unregister();
  }, [children, disabled, onClick, icon, order, registerAction]);

  return null;
});

export default TableActionOption;
