import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import TableRowContext from '../Row/context';

export interface ITableCollapseProps {
  onOpen?: (data?: unknown, index?: number) => void;
  onClose?: (data?: unknown, index?: number) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  disabledPadding?: boolean;
  disableBackground?: boolean;
}

const TableCollapse = React.memo<ITableCollapseProps>(
  ({ onOpen, onClose, disabled, disableBackground, disabledPadding, children }) => {
    const registerCollapse = useContextSelector(TableRowContext, context => context.registerCollapse);

    React.useEffect(() => {
      const unregister = registerCollapse({
        disabled,
        onOpen,
        onClose,
        disableBackground,
        disabledPadding,
        content: children
      });
      return () => unregister();
    }, [children, disabled, registerCollapse, onOpen, onClose, disableBackground, disabledPadding]);

    return null;
  }
);

export default TableCollapse;
