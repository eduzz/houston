import * as React from 'react';

import TableCell from '@material-ui/core/TableCell';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import ButtonIcon from '../../ButtonIcon';
import TableContext from '../context';
import TableActionContext, { ITableActionOption } from './context';

export interface ITableActionsProp {
  data: unknown;
  index?: number;
  children?: React.ReactNode;
}

let tableOptionIncremeter = 0;

const TableActions = React.memo<ITableActionsProp>(({ children, data, index }) => {
  const context = React.useContext(TableContext);
  const [options, setOptions] = React.useState<ITableActionOption[]>([]);

  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      context.onShowAction({ anchorEl: e.currentTarget, rowData: data, rowIndex: index, options });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options]
  );

  const registerOption = React.useCallback((option: Omit<ITableActionOption, 'key'>) => {
    const key = `table-action-option-${++tableOptionIncremeter}`;

    setOptions(options =>
      [...options, { key, ...option }].sort((a, b) => (a.order > b.order ? 1 : a.order === b.order ? 0 : -1))
    );
    return () => setOptions(options => options.filter(o => o.key !== key));
  }, []);

  const contextValue = React.useMemo(() => ({ options, registerOption }), [options, registerOption]);

  return (
    <TableActionContext.Provider value={contextValue}>
      <TableCell align='right'>
        <ButtonIcon size='small' onClick={onClick}>
          <MoreHorizIcon />
        </ButtonIcon>
        {children}
      </TableCell>
    </TableActionContext.Provider>
  );
});

export default TableActions;
