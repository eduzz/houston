import * as React from 'react';

import TableActionContext from './context';

export interface ITableActionOptionProp {
  children: React.ReactNode;
  onClick: (data: unknown, index?: number) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  order?: number;
}

const TableActionOption = React.memo<ITableActionOptionProp>(({ children, disabled, onClick, order, icon }) => {
  const context = React.useContext(TableActionContext);

  React.useEffect(() => {
    console.log('register 2');
    const unregister = context.registerOption({ disabled, onClick, icon, content: children });
    return () => unregister();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, disabled, onClick, icon, order]);

  return null;
});

export default TableActionOption;
