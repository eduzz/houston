import * as React from 'react';

import { cx } from '@emotion/css';
import CollapseMUI from '@mui/material/Collapse';
import { useContextSelector } from 'use-context-selector';

import TableRowContext from '../Row/context';
import TableCollapseContext from './context';

export interface ITableCollapseContentProps {
  visible: boolean;
}

const CollapseContent = React.memo<ITableCollapseContentProps>(({ visible }) => {
  const data = useContextSelector(TableRowContext, context => context.data);
  const index = useContextSelector(TableRowContext, context => context.index);
  const collapse = useContextSelector(TableRowContext, context => context.collapse);

  const onCollapseEnter = React.useCallback(
    () => collapse.onOpen && collapse.onOpen(data, index),
    [collapse, data, index]
  );

  const onCollapseClose = React.useCallback(
    () => collapse.onClose && collapse.onClose(data, index),
    [collapse, data, index]
  );

  return (
    <tr
      className={cx(
        'houston-table-collapse',
        visible && 'houston-table-collapse-opened',
        collapse?.disableBackground && 'houston-table-collapse-no-background',
        collapse?.disabledPadding && 'houston-table-collapse-no-padding'
      )}
    >
      <td colSpan={1000}>
        <CollapseMUI
          in={visible && !collapse?.disabled}
          timeout={350}
          onEntered={onCollapseEnter}
          onExited={onCollapseClose}
          unmountOnExit
        >
          <div className='houston-table-collapse-content'>
            <TableCollapseContext.Provider value={{ isCollapseContent: collapse !== null }}>
              {collapse?.content}
            </TableCollapseContext.Provider>
          </div>
        </CollapseMUI>
      </td>
    </tr>
  );
});

export default CollapseContent;
