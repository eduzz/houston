import * as React from 'react';

import { TableProps } from '@material-ui/core/Table';
import clsx from 'clsx';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import withHoustonTheme from '@eduzz/houston-ui/styles/ThemeProvider/WrapperTheme';

import MenuActions from '../Action/Menu';
import { ITableActionShow, ITableRow } from '../context';
import { bindMutationObserver } from '../observer';
import TableContext, { ITableContext } from './context';
import useStyles from './styles';

let columnsCollapseKeyIncrementer = 0,
  rowCollapseKeyIncremeter = 0;

export interface ICollapseTableProps extends Pick<TableProps, 'id' | 'children' | 'className'> {
  loading?: boolean;
  loadingText?: React.ReactNode;
  columnActionTitle?: string;
}

const CollapseTable: React.FC<ICollapseTableProps> = props => {
  const classes = useStyles();

  const { id, children, loading, columnActionTitle, className, loadingText } = props;

  const tableRef = React.useRef<HTMLTableElement>();

  const [openedMenuActions, , openMenuActions, closeMenuActions] = useBoolean(false);
  const [menuActionOptions, setMenuActionOptions] = React.useState<ITableActionShow>();

  const [rowMapLabel, setRowMapLabel] = React.useState<{ [rowKey: string]: string }>({});
  const [columnsCollapse, setColumnsCollapse] = React.useState<string[]>(() => []);
  const [rowsCollapse, setRowsCollapse] = React.useState<ITableRow[]>([]);

  const onShowAction = React.useCallback(
    (data: ITableActionShow) => {
      setMenuActionOptions(data);
      openMenuActions();
    },
    [openMenuActions]
  );

  const registerColumn = React.useCallback(() => {
    const key = `column-collapse-${++columnsCollapseKeyIncrementer}`;

    setColumnsCollapse(columns => [...columns, key]);
    return () => setColumnsCollapse(columns => columns.filter(c => c != key));
  }, []);

  const registerRowCollapse = React.useCallback((row: Omit<ITableRow, 'key'>) => {
    const key = `table-row-collapse-${++rowCollapseKeyIncremeter}`;

    setRowsCollapse(rows => [...rows, { key, ...row }]);
    return () => setRowsCollapse(rows => rows.filter(r => r.key !== key));
  }, []);

  const hasActionInRows = React.useMemo(() => rowsCollapse?.some(r => r.hasActions), [rowsCollapse]);

  React.useEffect(() => {
    const unbind = bindMutationObserver(tableRef?.current, rowMap => setRowMapLabel(rowMap));
    return () => unbind();
  }, []);

  const contextValue = React.useMemo<ITableContext>(
    () => ({
      loading: loading ?? false,
      loadingText: loadingText ?? 'Carregando...',
      onShowAction,
      registerColumn,
      rowMapLabel,
      columnsCollapse,
      rowsCollapse,
      registerRowCollapse,
      columnActionTitle,
      hasActionInRows
    }),
    [
      loading,
      loadingText,
      onShowAction,
      registerColumn,
      rowMapLabel,
      columnsCollapse,
      rowsCollapse,
      registerRowCollapse,
      columnActionTitle,
      hasActionInRows
    ]
  );

  return (
    <TableContext.Provider value={contextValue}>
      <table id={id} ref={tableRef} className={clsx(classes.table, className)}>
        {children}

        <MenuActions
          open={openedMenuActions}
          anchorEl={menuActionOptions?.anchorEl}
          options={menuActionOptions?.actions}
          rowData={menuActionOptions?.rowData}
          rowIndex={menuActionOptions?.rowIndex}
          onClose={closeMenuActions}
        />
      </table>
    </TableContext.Provider>
  );
};

export default withHoustonTheme(React.memo(CollapseTable));
