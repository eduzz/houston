import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import IconDotsHorizontal from '@eduzz/houston-icons/DotsHorizontal';

import CollapseTableContext from '../CollapseTable/context';
import { ITableAction } from '../interface';
import { ITableRowProps } from '../Row';
import TableCollapseRowContext, { ITableCollapseRowContext } from './context';
import useStyles from './styles';

let tableCollapseActionIncremeter = 0;

const TableCollapseRow = React.memo<ITableRowProps>(({ data, index, children, className, ...props }) => {
  const onShowAction = useContextSelector(CollapseTableContext, context => context.onShowAction);
  const registerRow = useContextSelector(CollapseTableContext, context => context.registerRowCollapse);
  const hasActionInRows = useContextSelector(CollapseTableContext, context => context.hasActionInRows);

  const classes = useStyles();

  const [actions, setActions] = React.useState<ITableAction[]>([]);

  const oneAction = actions.length === 1 ? actions[0] : null;
  const hasActions = actions.length > 0;

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

  const registerAction = React.useCallback((action: Omit<ITableAction, 'key'>) => {
    const key = `table-action-option-${++tableCollapseActionIncremeter}`;
    setActions(actions => [...actions, { key, ...action }]);
    return () => setActions(actions => actions.filter(o => o.key !== key));
  }, []);

  React.useEffect(() => {
    const unregister = registerRow({ hasActions });
    return () => unregister();
  }, [hasActions, registerRow]);

  const contextValue = React.useMemo<ITableCollapseRowContext>(() => ({ registerAction }), [registerAction]);

  const classesAction = React.useMemo(
    () => clsx(classes.cellAction, 'table-action-cell', className),
    [className, classes.cellAction]
  );

  return (
    <TableCollapseRowContext.Provider value={contextValue}>
      <tr {...props} className={clsx(hasActions && 'table-row-has-action', className)}>
        {children}

        {hasActions && (
          <td align='right' className={classesAction}>
            {hasActions && (
              <div onClick={onClickAction} className={classes.iconAction}>
                {oneAction?.icon ?? <IconDotsHorizontal size={24} />}
              </div>
            )}
          </td>
        )}

        {!hasActions && hasActionInRows && <td className={clsx(classesAction)} />}
      </tr>
    </TableCollapseRowContext.Provider>
  );
});

export default TableCollapseRow;
