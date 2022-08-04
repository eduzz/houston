import * as React from 'react';

import { TableProps as TablePropsMui } from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import { cx } from '@eduzz/houston-styles';
import { StyledProp } from '@eduzz/houston-styles/styled';

import MenuActions from './Action/Menu';
import TableCollapseContext from './CollapseContent/context';
import TableContext, { TableActionShow, TableContextProps, TableRow } from './context';
import { bindMutationObserver } from './observer';
import styles from './styles';

let columnsKeyIncrementer = 0,
  rowKeyIncremeter = 0;

export interface TableProps extends Pick<TablePropsMui, 'id' | 'children' | 'className'>, StyledProp {
  loading?: boolean;
  loadingText?: React.ReactNode;
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

const Table: React.FC<TableProps> = props => {
  const {
    size = 'medium',
    id,
    children,
    loading,
    maxHeight,
    stripedRows,
    columnActionTitle,
    className,
    loadingText
  } = props;

  const isCollapseContent = useContextSelector(TableCollapseContext, context => context.isCollapseContent);

  const tableRef = React.useRef<HTMLTableElement>(null);
  const mediaQueryMobile = useMediaQuery(`(max-width: ${props.mobileWidth ?? 600}px)`);
  const responsive = typeof props.mobileWidth === 'boolean' ? props.mobileWidth : mediaQueryMobile;

  const [openedMenuActions, , openMenuActions, closeMenuActions] = useBoolean(false);
  const [menuActionOptions, setMenuActionOptions] = React.useState<TableActionShow>();

  const [rowMapLabel, setRowMapLabel] = React.useState<{ [rowKey: string]: string }>({});
  const [columns, setColumns] = React.useState<string[]>(() => []);
  const [rows, setRows] = React.useState<TableRow[]>([]);

  const onShowAction = React.useCallback(
    (data: TableActionShow) => {
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

  const registerRow = React.useCallback((row: Omit<TableRow, 'key'>) => {
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
    if (!tableRef.current) return () => null;

    const unbind = bindMutationObserver(tableRef.current, rowMap => setRowMapLabel(rowMap));
    return () => unbind();
  }, []);

  const contextValue = React.useMemo<TableContextProps>(
    () => ({
      loading: loading ?? false,
      loadingText: loadingText ?? 'Carregando...',
      onShowAction,
      registerColumn,
      rowMapLabel,
      columns,
      rows,
      registerRow,
      stripedRows: stripedRows ?? false,
      columnActionTitle,
      size: isCollapseContent ? 'small' : size,
      hasCollapseInRows,
      hasActionInRows,
      isCollapseContent
    }),
    [
      loading,
      loadingText,
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
      <TableContainer className={className} style={{ maxHeight }}>
        <table id={id} ref={tableRef} className={cx('__houston-table', responsive && '--responsive', className)}>
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

export default React.memo(styles(Table));
