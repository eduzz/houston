import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import IconDotsHorizontal from '@eduzz/houston-icons/DotsHorizontal';
import { cx, StyledProp } from '@eduzz/houston-styles';

import TableRowContext, { TableRowContextProps } from './context';
import IconButton from '../../IconButton';
import Spinner from '../../Loaders/Spinner';
import Popover from '../../Popover';
import usePopover from '../../Popover/usePopover';
import TableContext from '../context';

let actionIncremeter = 0;

export interface TableRowProps<T = unknown> extends StyledProp, React.HTMLAttributes<HTMLTableRowElement> {
  data: T;
  index: number;
  children?: React.ReactNode;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

const TableRow = ({ data, index, children, className, ...props }: TableRowProps) => {
  const { openPopover, isPopoverOpened, popoverProps, popoverTargetProps, closePopover } = usePopover();

  const [portals] = React.useState(() => {
    const ref = ++actionIncremeter;

    return {
      actions: `hts-table-row-actions-${ref}`,
      collapse: `hts-table-row-collapse-${ref}`
    };
  });

  const registerRow = useContextSelector(TableContext, context => context.registerRow);
  const hasCollapseInRows = useContextSelector(TableContext, context => context.hasCollapseInRows);
  const hasActionInRows = useContextSelector(TableContext, context => context.hasActionInRows);

  const [showCollapse, toogleShowCollapse] = useBoolean(false);
  const [actionLoading, setActionLoading] = React.useState(false);

  const [hasCollapse, setHasCollapse] = React.useState(false);
  const [actions, setActions] = React.useState<number>(0);

  const hasActions = actions > 0;

  const registerCollapse = React.useCallback(() => {
    setHasCollapse(true);
    return () => setHasCollapse(false);
  }, []);

  const registerAction = React.useCallback(() => {
    setActions(actions => ++actions);
    return () => setActions(actions => --actions);
  }, []);

  React.useEffect(() => {
    const unregister = registerRow({ hasActions, hasCollapse });
    return () => unregister();
  }, [hasActions, hasCollapse, registerRow]);

  const contextValue = React.useMemo<TableRowContextProps>(
    () => ({
      portals,
      data,
      index,
      showCollapse,
      closeMenu: closePopover,
      registerAction,
      setActionLoading,
      registerCollapse
    }),
    [closePopover, data, index, portals, registerAction, registerCollapse, showCollapse]
  );

  return (
    <TableRowContext.Provider value={contextValue}>
      <tr {...props} className={className}>
        {children}

        <td
          align='right'
          className={cx('hts-table-cell-action', !hasActionInRows && !hasCollapseInRows && 'hst-table-hidden')}
        >
          <Popover {...popoverProps} placement='bottom-end' keepMounted>
            <div id={portals.actions} className='hts-table-cell-action-menu' />
          </Popover>

          {hasActions && (
            <IconButton active={isPopoverOpened} disabled={actionLoading} onClick={openPopover} {...popoverTargetProps}>
              {actionLoading ? <Spinner size={18} /> : <IconDotsHorizontal />}
            </IconButton>
          )}

          {hasCollapse && (
            <IconButton onClick={toogleShowCollapse}>
              <IconChevronDown
                className={cx('hts-table-cell-collapse-arrow', showCollapse && 'hts-table-cell-collapse-arrow-active')}
              />
            </IconButton>
          )}
        </td>
      </tr>

      <tr id={portals.collapse} />
    </TableRowContext.Provider>
  );
};

/**
 * @deprecated Use Table from Antd
 * https://ant.design/components/table/
 */
export default React.memo(TableRow);
