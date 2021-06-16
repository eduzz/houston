import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import clsx from 'clsx';

import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import MenuActions from './Action/Menu';
import TableContext, { ITableActionShow, ITableContext, ITableRow } from './context';
import { ITableSort, TableComponent } from './interface';
import { bindMutationObserver } from './observer';
import useStyles, { IStyleParams } from './styles';

let columnsKeyIncrementer = 0,
  rowKeyIncremeter = 0;

export interface ITableProps extends Pick<TableProps, 'id' | 'children' | 'className'> {
  loading?: boolean;
  stickyHeader?: boolean;
  sort?: ITableSort;
  /**
   * Function called when clicking on an ordered column
   */
  onSort?: (ordernation: ITableSort) => void;
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
  mobileWidth?: number | false;
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
  const mediaQueryMobile = useMediaQuery(`(max-width: ${props.mobileWidth ?? 600}px)`);
  const responsive = props.mobileWidth === false ? false : mediaQueryMobile;

  const [openedMenuActions, , openMenuActions, closeMenuActions] = useBoolean(false);
  const [menuActionOptions, setMenuActionOptions] = React.useState<ITableActionShow>();

  const [rowMapLabel, setRowMapLabel] = React.useState<{ [rowKey: string]: string }>({});
  const [columns, setColumns] = React.useState<string[]>(() => []);
  const [rows, setRows] = React.useState<ITableRow[]>([]);

  const propsStyle = React.useMemo<IStyleParams>(() => ({ maxHeight, mobileWidth }), [maxHeight, mobileWidth]);
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

  const registerRow = React.useCallback((row: Omit<ITableRow, 'key'>) => {
    const key = `table-row-${++rowKeyIncremeter}`;

    setRows(rows => [...rows, { key, ...row }]);
    return () => setRows(rows => rows.filter(r => r.key !== key));
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
      rows,
      registerRow,
      stripedRows,
      columnActionTitle
    }),
    [
      loading,
      sort,
      onSort,
      onShowAction,
      registerColumn,
      rowMapLabel,
      columns,
      rows,
      registerRow,
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
            className={clsx(classes.table, responsive && classes.tableResponsive, className)}
          >
            {children}

            <MenuActions
              open={openedMenuActions}
              anchorEl={menuActionOptions?.anchorEl}
              options={menuActionOptions?.actions}
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
