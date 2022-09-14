import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { cx } from '@eduzz/houston-styles';

import Collapse from '../../Collapse';
import Portal from '../../Portal';
import TableRowContext from '../Row/context';

export interface TableCollapseContentProps {
  onOpen?: (data: unknown, index: number) => void;
  onClose?: (data: unknown, index: number) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  disabledPadding?: boolean;
  disableBackground?: boolean;
  keepMounted?: boolean;
}

const CollapseContent = ({
  onOpen,
  onClose,
  keepMounted,
  disableBackground,
  disabledPadding,
  children
}: TableCollapseContentProps) => {
  const data = useContextSelector(TableRowContext, context => context.data);
  const index = useContextSelector(TableRowContext, context => context.index);
  const visible = useContextSelector(TableRowContext, context => context.showCollapse);
  const portal = useContextSelector(TableRowContext, context => context.portals.collapse);

  const registerCollapse = useContextSelector(TableRowContext, context => context.registerCollapse);

  React.useEffect(() => {
    const unregister = registerCollapse();
    return () => unregister();
  }, [registerCollapse]);

  const onCollapseEnter = React.useCallback(() => onOpen && onOpen(data, index), [data, index, onOpen]);
  const onCollapseClose = React.useCallback(() => onClose && onClose(data, index), [data, index, onClose]);

  return (
    <Portal target={portal}>
      <td
        colSpan={1000}
        className={cx(
          'hts-table-collapse',
          visible && 'hts-table-collapse-opened',
          disableBackground && 'hts-table-collapse-no-background',
          disabledPadding && 'hts-table-collapse-no-padding'
        )}
      >
        <Collapse
          visibled={visible}
          timeout={350}
          onEnter={onCollapseEnter}
          onClose={onCollapseClose}
          destroyOnClose={keepMounted}
        >
          <div className='houston-table-collapse-content'>{children}</div>
        </Collapse>
      </td>
    </Portal>
  );
};

export default React.memo(CollapseContent);
