import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import IconDotsHorizontal from '@eduzz/houston-icons/DotsHorizontal';

import CollapseContent from '../CollapseContent';
import TableContext from '../context';
import { ITableAction, ITableCollapse } from '../interface';
import TableRowContext, { ITableRowContext } from './context';
import useStyles from './styles';

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

const TableRow = React.memo<ITableRowProps>(({ data, index, children, className, ...props }) => {
  const stripedRows = useContextSelector(TableContext, context => context.stripedRows);
  const onShowAction = useContextSelector(TableContext, context => context.onShowAction);
  const registerRow = useContextSelector(TableContext, context => context.registerRow);
  const tableSize = useContextSelector(TableContext, context => context.size);
  const hasCollapseInRows = useContextSelector(TableContext, context => context.hasCollapseInRows);
  const hasActionInRows = useContextSelector(TableContext, context => context.hasActionInRows);
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  const classes = useStyles();

  const [showCollapse, toogleShowCollapse] = useBoolean(false);

  const [collapse, setCollapse] = React.useState<ITableCollapse>(null);
  const [actions, setActions] = React.useState<ITableAction[]>([]);

  const oneAction = actions.length === 1 ? actions[0] : null;
  const hasActions = actions.length > 0;
  const hasCollapse = collapse !== null;

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

  React.useEffect(() => {
    const unregister = registerRow({ hasActions, hasCollapse });
    return () => unregister();
  }, [hasActions, hasCollapse, registerRow]);

  const contextValue = React.useMemo<ITableRowContext>(
    () => ({ registerAction, registerCollapse, data, index, collapse }),
    [collapse, data, index, registerAction, registerCollapse]
  );

  const classesColumnAction = React.useMemo(
    () => clsx(classes.cellAction, tableSize === 'small' && '--small', 'table-action-cell', className),
    [className, classes.cellAction, tableSize]
  );

  const classesColumnCollapse = React.useMemo(
    () => clsx(classes.cellCollapse, tableSize === 'small' && '--small', 'table-collapse-cell', className),
    [className, classes.cellCollapse, tableSize]
  );

  return (
    <TableRowContext.Provider value={contextValue}>
      <tr
        {...props}
        className={clsx(
          hasActions && 'table-row-has-action',
          !isCollapseContent && hasCollapse && 'table-row-has-collapse',
          !isCollapseContent && stripedRows && (index % 2 == 0 ? 'table-row-even' : 'table-row-odd'),
          className
        )}
      >
        {children}

        {hasActions && (
          <td align='right' className={classesColumnAction}>
            {hasActions && (
              <div onClick={onClickAction} className={classes.iconAction}>
                {oneAction?.icon ?? <IconDotsHorizontal size={24} />}
              </div>
            )}
          </td>
        )}

        {!hasActions && hasActionInRows && <td className={classesColumnAction} />}

        {!isCollapseContent && hasCollapse && (
          <td align='right' className={classesColumnCollapse}>
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

        {!hasCollapse && hasCollapseInRows && <td className={classesColumnCollapse} />}
      </tr>

      {!isCollapseContent && hasCollapse && <CollapseContent visible={showCollapse} />}
    </TableRowContext.Provider>
  );
});

export default TableRow;
