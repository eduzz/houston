import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableRowContext from '../Row/context';

export interface TableActionOptionProp {
  children?: React.ReactNode;
  onClick: (data: unknown, index?: number) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const TableActionOption = React.memo<TableActionOptionProp>(({ children, disabled, onClick, icon }) => {
  const registerAction = useContextSelector(TableRowContext, context => context.registerAction);

  React.useEffect(() => {
    const unregister = registerAction({ disabled, onClick, icon, content: children });
    return () => unregister();
  }, [children, disabled, onClick, icon, registerAction]);

  return null;
});

export default TableActionOption;
