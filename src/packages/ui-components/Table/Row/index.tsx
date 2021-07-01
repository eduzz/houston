import * as React from 'react';

import CollapseMUI from '@material-ui/core/Collapse';
import TableCell from '@material-ui/core/TableCell';
import TableRowMUI, { TableRowProps } from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import ButtonIcon from '../../ButtonIcon';
import TableContext from '../context';
import { ITableAction, ITableCollapse } from '../interface';
import TableRowContext, { ITableRowContext } from './context';

let tableActionIncremeter = 0;

type ITableRowExtends = 'id' | 'className' | 'tabIndex' | 'onClick' | 'onDoubleClick';

export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
  data: unknown;
  index: number;
  children?: React.ReactNode;
}

const TableRow = React.memo<ITableRowProps>(({ data, index, children, className, ...props }) => {
  const stripedRows = useContextSelector(TableContext, context => context.stripedRows);
  const onShowAction = useContextSelector(TableContext, context => context.onShowAction);
  const registerRow = useContextSelector(TableContext, context => context.registerRow);
  const columnSpan = useContextSelector(TableContext, context => context.columns.length);

  const [showCollapse, toogleShowCollapse] = useBoolean(false);

  const [collapse, setCollapse] = React.useState<ITableCollapse>(null);
  const [actions, setActions] = React.useState<ITableAction[]>([]);

  const hasOnlyOneAction = actions.length === 1;
  const hasActions = actions.length > 0;
  const hasCollapse = collapse != null;

  const onClickAction = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onShowAction({ anchorEl: e.currentTarget, rowData: data, rowIndex: index, actions });
    },
    [onShowAction, data, index, actions]
  );

  const registerCollapse = React.useCallback((content: ITableCollapse) => {
    setCollapse(content);
    return () => setCollapse(null);
  }, []);

  const registerAction = React.useCallback((action: Omit<ITableAction, 'key'>) => {
    const key = `table-action-option-${++tableActionIncremeter}`;

    setActions(actions =>
      [...actions, { key, ...action }].sort((a, b) => (a.order > b.order ? 1 : a.order === b.order ? 0 : -1))
    );
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

  const RenderFirstAction = React.memo(() => {
    const { onClick, disabled, icon } = actions[0];
    return (
      <ButtonIcon size='small' onClick={onClick && onClick} disabled={disabled}>
        {icon ? icon : <MoreHorizIcon color='action' />}
      </ButtonIcon>
    );
  });

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
      <TableRowMUI
        hover={!stripedRows}
        {...props}
        className={clsx(
          hasActions && 'table-row-has-action',
          hasCollapse && 'table-row-has-collapse',
          stripedRows ? (index % 2 == 0 ? 'table-row-even' : 'table-row-odd') : null,
          className
        )}
      >
        {children}

        {(hasActions || hasCollapse) && (
          <TableCell align='right' className={clsx('table-action-cell', className)}>
            {hasOnlyOneAction && <RenderFirstAction />}
            {!hasOnlyOneAction && hasActions && (
              <ButtonIcon size='small' onClick={onClickAction} disabled={!actions.length}>
                <MoreHorizIcon color='action' />
              </ButtonIcon>
            )}
            {!hasActions && <span />}

            {hasCollapse ? (
              <ButtonIcon
                size='small'
                onClick={toogleShowCollapse}
                disabled={collapse.disabled}
                className={clsx('table-collapse-button', showCollapse && 'table-collapse-button-opened')}
              >
                <KeyboardArrowDownIcon color='action' />
              </ButtonIcon>
            ) : (
              <span />
            )}
          </TableCell>
        )}
      </TableRowMUI>
      {hasCollapse && (
        <TableRowMUI
          className={clsx(
            'table-collapse',
            showCollapse && 'table-collapse-opened',
            collapse.disableBackground && 'table-collapse-no-background',
            collapse.disabledPadding && 'table-collapse-no-padding'
          )}
        >
          <TableCell colSpan={columnSpan}>
            <CollapseMUI
              in={showCollapse && !collapse.disabled}
              timeout={350}
              onEntered={onCollapseEnter}
              onExited={onCollapseClose}
              unmountOnExit
            >
              <div className='table-collapse-content'>{collapse.content}</div>
            </CollapseMUI>
          </TableCell>
        </TableRowMUI>
      )}
    </TableRowContext.Provider>
  );
});

export default TableRow;
