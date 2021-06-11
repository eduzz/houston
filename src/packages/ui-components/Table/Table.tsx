import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import clsx from 'clsx';

import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import MenuActions from './Actions/Menu';
import TableContext, { ITableActionShow, ITableContext } from './context';
import { ITableSort, TableComponent } from './interface';
import { bindMutationObserver } from './observer';
import useStyles, { IStyleParams } from './styles';

let columnsKeyIncrementer = 0,
  actionsKeyIncremeter = 0;

export interface ITableProps extends Pick<TableProps, 'id' | 'children' | 'className'> {
  loading?: boolean;
  sort?: ITableSort;
  /**
   * Function called when clicking on an ordered column
   */
  onSort?: (ordernation: ITableSort) => void;
  /**
   * Function called when clicking in icon action in row
   */
  onActionsClick?: (event: React.MouseEvent<HTMLElement>, data: unknown) => void;
  stickyHeader?: boolean;
  /**
   * Default `medium`
   */
  size?: Size;
  /**
   * Max Height table container
   */
  maxHeight?: number;
  stripedRows?: boolean;
  columnActionTitle?: string;
  mobileWidth?: number;
}

const Table: TableComponent = React.memo<ITableProps>(props => {
  const {
    stickyHeader,
    size,
    id,
    children,
    loading,
    sort,
    onSort,
    maxHeight,
    stripedRows,
    columnActionTitle,
    className,
    mobileWidth
  } = props;

  const tableRef = React.useRef<HTMLTableElement>();

  const [openedMenuActions, , openMenuActions, closeMenuActions] = useBoolean(false);
  const [menuActionOptions, setMenuActionOptions] = React.useState<ITableActionShow>();

  const [rowMapLabel, setRowMapLabel] = React.useState<{ [rowKey: string]: string }>({});
  const [columns, setColumns] = React.useState<string[]>(() => []);
  const [actions, setActions] = React.useState<string[]>([]);

  const hasActions = actions.length > 0;
  const propsStyle = React.useMemo<IStyleParams>(
    () => ({ maxHeight, hasActions, mobileWidth }),
    [hasActions, maxHeight, mobileWidth]
  );
  const classes = useStyles(propsStyle);

  const onShowAction = React.useCallback(
    (data: ITableActionShow) => {
      setMenuActionOptions(data);
      openMenuActions();
    },
    [openMenuActions]
  );

  const registerColumn = React.useCallback(() => {
    const key = `column-${++columnsKeyIncrementer}`;

    setColumns(columns => [...columns, key]);
    return () => setColumns(columns => columns.filter(c => c != key));
  }, []);

  const registerActions = React.useCallback(() => {
    const key = `table-action-option-${++actionsKeyIncremeter}`;

    setActions(options => [...options, key]);
    return () => setActions(options => options.filter(o => o !== key));
  }, []);

  React.useEffect(() => {
    const unbind = bindMutationObserver(tableRef.current, rowMap => setRowMapLabel(rowMap));
    return () => unbind();
  }, []);

  const contextValue = React.useMemo<ITableContext>(
    () => ({
      loading: loading ?? false,
      sort,
      onSort,
      onShowAction,
      registerColumn,
      rowMapLabel,
      columns,
      actions,
      registerActions,
      stripedRows,
      columnActionTitle
    }),
    [
      loading,
      sort,
      onSort,
      onShowAction,
      rowMapLabel,
      registerColumn,
      columns,
      actions,
      registerActions,
      stripedRows,
      columnActionTitle
    ]
  );

  return (
    <WrapperTheme>
      <TableContext.Provider value={contextValue}>
        <TableContainer className={classes.tableContainer}>
          <TableMUI
            stickyHeader={stickyHeader}
            size={size}
            id={id}
            ref={tableRef}
            className={clsx(classes.table, className)}
          >
            {children}

            <MenuActions
              open={openedMenuActions}
              anchorEl={menuActionOptions?.anchorEl}
              options={menuActionOptions?.options}
              rowData={menuActionOptions?.rowData}
              rowIndex={menuActionOptions?.rowIndex}
              onClose={closeMenuActions}
            />
          </TableMUI>
        </TableContainer>
      </TableContext.Provider>
    </WrapperTheme>
  );
});

export default Table;
