import * as React from 'react';

import CollapseMUI from '@material-ui/core/Collapse';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import IconDotsHorizontal from '@eduzz/houston-icons/DotsHorizontal';
import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';

import TableContext from '../context';
import { ITableAction, ITableCollapse, ITableSize } from '../interface';
import TableRowContext, { ITableRowContext } from './context';

let tableActionIncremeter = 0;

export interface ITableRowProps {
  id?: string;
  className?: string;
  data: unknown;
  index: number;
  children?: React.ReactNode;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

const useStyles = createUseStyles(theme => ({
  cellAction: ({ size }: { size: ITableSize }) => ({
    padding: '6px 12px',
    borderBottom: `1px solid ${theme.colors.grey[200]}`,
    fontSize: theme.textSize(size === 'small' ? 'small' : 'normal')
  }),

  cellCollapse: ({ size }: { size: ITableSize }) => ({
    paddingRight: 8,
    borderBottom: `1px solid ${theme.colors.grey[200]}`,
    fontSize: theme.textSize(size === 'small' ? 'small' : 'normal')
  }),

  iconAction: {
    display: 'inline-flex',
    padding: 4,
    transition: 'background 0.2s linear',
    borderRadius: '50%',
    cursor: 'pointer',

    '&:hover': {
      background: theme.colors.grey[200]
    },

    '&:focus': {
      background: theme.colors.grey[300]
    },

    '& .houston-icon': {
      '& svg': {
        fill: theme.colors.grey[600]
      }
    }
  }
}));

const TableRow = React.memo<ITableRowProps>(({ data, index, children, className, ...props }) => {
  const stripedRows = useContextSelector(TableContext, context => context.stripedRows);
  const onShowAction = useContextSelector(TableContext, context => context.onShowAction);
  const registerRow = useContextSelector(TableContext, context => context.registerRow);
  const columnSpan = useContextSelector(TableContext, context => context.columns.length);
  const tableSize = useContextSelector(TableContext, context => context.size);
  const hasCollapseInRows = useContextSelector(TableContext, context => context.hasCollapseInRows);
  const hasActionInRows = useContextSelector(TableContext, context => context.hasActionInRows);

  const classes = useStyles({ size: tableSize });

  const [showCollapse, toogleShowCollapse] = useBoolean(false);

  const [collapse, setCollapse] = React.useState<ITableCollapse>(null);
  const [actions, setActions] = React.useState<ITableAction[]>([]);

  const oneAction = actions.length === 1 ? actions[0] : null;
  const hasActions = actions.length > 0;
  const hasCollapse = collapse != null;

  const onClickAction = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (oneAction) {
        oneAction.onClick(data, index);
        return;
      }

      onShowAction({ anchorEl: e.currentTarget, rowData: data, rowIndex: index, actions });
    },
    [oneAction, onShowAction, data, index, actions]
  );

  const registerCollapse = React.useCallback((content: ITableCollapse) => {
    setCollapse(content);
    return () => setCollapse(null);
  }, []);

  const registerAction = React.useCallback((action: Omit<ITableAction, 'key'>) => {
    const key = `table-action-option-${++tableActionIncremeter}`;
    setActions(actions => [...actions, { key, ...action }]);
    return () => setActions(actions => actions.filter(o => o.key !== key));
  }, []);

  const onCollapseEnter = React.useCallback(
    () => collapse.onOpen && collapse.onOpen(data, index),
    [collapse, data, index]
  );

  const onCollapseClose = React.useCallback(
    () => collapse.onClose && collapse.onClose(data, index),
    [collapse, data, index]
  );

  React.useEffect(() => {
    const unregister = registerRow({ hasActions, hasCollapse });
    return () => unregister();
  }, [hasActions, hasCollapse, registerRow]);

  const contextValue = React.useMemo<ITableRowContext>(
    () => ({ registerAction, registerCollapse }),
    [registerAction, registerCollapse]
  );

  return (
    <TableRowContext.Provider value={contextValue}>
      <tr
        {...props}
        className={clsx(
          hasActions && 'table-row-has-action',
          hasCollapse && 'table-row-has-collapse',
          stripedRows ? (index % 2 == 0 ? 'table-row-even' : 'table-row-odd') : null,
          className
        )}
      >
        {children}

        {hasActions && (
          <td align='right' className={clsx(classes.cellAction, 'table-action-cell', className)}>
            {hasActions && (
              <div onClick={onClickAction} className={classes.iconAction}>
                {oneAction?.icon ?? <IconDotsHorizontal size={24} />}
              </div>
            )}
          </td>
        )}

        {!hasActions && hasActionInRows && <td className={clsx(classes.cellAction, 'table-action-cell', className)} />}

        {hasCollapse && (
          <td align='right' className={clsx(classes.cellCollapse, 'table-collapse-cell', className)}>
            <div
              onClick={toogleShowCollapse}
              className={clsx(
                classes.iconAction,
                'table-collapse-button',
                showCollapse && 'table-collapse-button-opened'
              )}
            >
              <IconChevronDown size={24} />
            </div>
          </td>
        )}

        {!hasCollapse && hasCollapseInRows && (
          <td className={clsx(classes.cellCollapse, 'table-collapse-cell', className)} />
        )}
      </tr>

      {hasCollapse && (
        <tr
          className={clsx(
            'table-collapse',
            showCollapse && 'table-collapse-opened',
            collapse.disableBackground && 'table-collapse-no-background',
            collapse.disabledPadding && 'table-collapse-no-padding'
          )}
        >
          <td colSpan={columnSpan}>
            <CollapseMUI
              in={showCollapse && !collapse.disabled}
              timeout={350}
              onEntered={onCollapseEnter}
              onExited={onCollapseClose}
              unmountOnExit
            >
              <div className='table-collapse-content'>{collapse.content}</div>
            </CollapseMUI>
          </td>
        </tr>
      )}
    </TableRowContext.Provider>
  );
});

export default TableRow;
