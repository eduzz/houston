import * as React from 'react';

import TableCell from '@material-ui/core/TableCell';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useContextSelector } from 'use-context-selector';

import ButtonIcon from '../../ButtonIcon';
import TableContext from '../context';
import { ITableActionOption } from '../interface';
import TableActionContext from './context';

let tableOptionIncremeter = 0;

export interface ITableActionsProp {
  data: unknown;
  index?: number;
  children?: React.ReactNode;
}

const TableActions = React.memo<ITableActionsProp>(({ children, data, index }) => {
  const onShowAction = useContextSelector(TableContext, context => context.onShowAction);
  const registerActions = useContextSelector(TableContext, context => context.registerActions);

  const [options, setOptions] = React.useState<ITableActionOption[]>([]);

  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onShowAction({ anchorEl: e.currentTarget, rowData: data, rowIndex: index, options });
    },
    [onShowAction, data, index, options]
  );

  const registerOption = React.useCallback((option: Omit<ITableActionOption, 'key'>) => {
    const key = `table-action-option-${++tableOptionIncremeter}`;

    setOptions(options =>
      [...options, { key, ...option }].sort((a, b) => (a.order > b.order ? 1 : a.order === b.order ? 0 : -1))
    );
    return () => setOptions(options => options.filter(o => o.key !== key));
  }, []);

  const contextValue = React.useMemo(() => ({ registerOption }), [registerOption]);

  React.useEffect(() => {
    const unregister = registerActions();
    return () => unregister();
  }, [registerActions]);

  return (
    <TableActionContext.Provider value={contextValue}>
      <TableCell align='right'>
        <ButtonIcon size='small' onClick={onClick} disabled={!options.length}>
          <MoreHorizIcon color='action' />
        </ButtonIcon>
        {children}
      </TableCell>
    </TableActionContext.Provider>
  );
});

export default TableActions;
