import * as React from 'react';

import { TableProps } from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import MenuActions from './Action/Menu';
import TableCollapseContext from './CollapseContent/context';
import TableContext, { ITableActionShow, ITableContext, ITableRow } from './context';
import { ITableSort } from './interface';
import { bindMutationObserver } from './observer';
import useStyles from './styles';

let columnsKeyIncrementer = 0,
  rowKeyIncremeter = 0;

export interface ITableProps extends Pick<TableProps, 'id' | 'children' | 'className'> {
  loading?: boolean;
  loadingText?: React.ReactNode;
  sort?: ITableSort;
  /**
   * Function called when clicking on an ordered column
   */
  onSort?: (ordernation: ITableSort) => void;
  /**
   * Default `medium`
   */
  size?: 'small' | 'medium';
  /**
   * Max Height table container
   */
  maxHeight?: number;
  stripedRows?: boolean;
  columnActionTitle?: string;
  mobileWidth?: number | boolean;
}

const Table: React.FC<ITableProps> = props => {
  const {
    size = 'medium',
    id,
    children,
    loading,
    sort,
    onSort,
    maxHeight,
    stripedRows,
    columnActionTitle,
    className,
    loadingText
  } = props;

  const classes = useStyles();

  const isCollapseContent = useContextSelector(TableCollapseContext, context => context.isCollapseContent);

  const tableRef = React.useRef<HTMLTableElement>();
  const mediaQueryMobile = useMediaQuery(`(max-width: ${props.mobileWidth ?? 600}px)`);
  const responsive = typeof props.mobileWidth === 'boolean' ? props.mobileWidth : mediaQueryMobile;

  const [openedMenuActions, , openMenuActions, closeMenuActions] = useBoolean(false);
  const [menuActionOptions, setMenuActionOptions] = React.useState<ITableActionShow>();

  const [rowMapLabel, setRowMapLabel] = React.useState<{ [rowKey: string]: string }>({});
  const [columns, setColumns] = React.useState<string[]>(() => []);
  const [rows, setRows] = React.useState<ITableRow[]>([]);

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

  const hasCollapseInRows = React.useMemo(
    () => !isCollapseContent && rows?.some(r => r.hasCollapse),
    [isCollapseContent, rows]
  );

  const hasActionInRows = React.useMemo(() => rows?.some(r => r.hasActions), [rows]);

  React.useEffect(() => {
    const unbind = bindMutationObserver(tableRef?.current, rowMap => setRowMapLabel(rowMap));
    return () => unbind();
  }, []);

  const contextValue = React.useMemo<ITableContext>(
    () => ({
      loading: loading ?? false,
      loadingText: loadingText ?? 'Carregando...',
      sort,
      onSort,
      onShowAction,
      registerColumn,
      rowMapLabel,
      columns,
      rows,
      registerRow,
      stripedRows,
      columnActionTitle,
      size: isCollapseContent ? 'small' : size,
      hasCollapseInRows,
      hasActionInRows,
      isCollapseContent
    }),
    [
      loading,
      loadingText,
      sort,
      onSort,
      onShowAction,
      registerColumn,
      rowMapLabel,
      columns,
      rows,
      registerRow,
      stripedRows,
      columnActionTitle,
      isCollapseContent,
      size,
      hasCollapseInRows,
      hasActionInRows
    ]
  );

  return (
    <TableContext.Provider value={contextValue}>
      <TableContainer className={classes.tableContainer} style={{ maxHeight }}>
        <table id={id} ref={tableRef} className={clsx(classes.table, responsive && classes.tableResponsive, className)}>
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
      </TableContainer>
    </TableContext.Provider>
  );
};

export default withHoustonTheme(React.memo(Table));
