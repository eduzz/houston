/* eslint-disable max-lines */

import * as React from 'react';

import { Theme } from '@mui/material/styles';
import TableMUI, { TableProps } from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';

import { getReactChildrenComponent, getReactChildrenProps, isReactComponent } from '../Helpers/functions';
import nestedComponent from '../Helpers/nestedComponent';
import { useFirstChildrenProps, useChildrenProps } from '../hooks/useChildrenProps';
import createUseStyles from '../styles/createUseStyles';
import withHoustonTheme from '../styles/ThemeProvider/WrapperTheme';
import TableActions from './Actions';
import TableCell, { ITableCellProps } from './Cell';
import TableCollapse from './Collapse';
import TableColumn, { ITableColumnProps } from './Column';
import TableContextProvider from './context';
import { ITableActions, ITableCollapse, ITableMessages, ITableRow, ITableSortable } from './interfaces';
import Actions from './internals/Actions';
import Columns from './internals/Columns';
import Pagination from './internals/Pagination';
import RowsDesktop from './internals/Rows/Desktop';
import RowsMobile from './internals/Rows/Mobile';
import TableOption, { ITableOptionProps } from './Option';
import TablePagination, { ITablePagination } from './Pagination';
import TableRow from './Row';

const useStyles = createUseStyles({
  fixed: { whiteSpace: 'nowrap' }
});

export interface ITableProps extends Pick<TableProps, 'id' | 'children'> {
  loading?: boolean;
  initialOrdenation?: ITableSortable;
  /**
   * Function called when clicking on an ordered column
   */
  onSortable?: (ordernation: ITableSortable) => void;
  /**
   * Function called when clicking in icon action in row
   */
  onActionsClick?: (event: React.MouseEvent<HTMLElement>, data: unknown) => void;

  /**
   * Default `false`
   */
  stickyHeader?: boolean;
  /**
   * Default `medium`
   */
  size?: 'small' | 'medium';
  /**
   * Max Height table container
   */
  maxHeight?: number;
  /**
   * Messages for some situations, example: `when there is no date`
   */
  messages?: ITableMessages;
  stripedRows?: boolean;
}

const getActions = (content: React.ReactChildren | React.ReactNode): ITableActions => {
  return getReactChildrenComponent(content, TableActions).map(child => {
    return { ...child.props, options: getReactChildrenProps<ITableOptionProps>(child?.props?.children, TableOption) };
  })?.[0];
};

const getCollapseData = (content: React.ReactNode): ITableCollapse => {
  const columns = getReactChildrenProps<ITableColumnProps>(content, TableColumn);
  const actions = getActions(content);

  const rows = getReactChildrenComponent(content, TableRow).map(row => {
    const options = getReactChildrenComponent(row?.props?.children, TableActions).reduce((acc, child) => {
      return [...acc, ...getReactChildrenProps<ITableOptionProps>(child.props?.children, TableOption)];
    }, []);

    const cells = getReactChildrenComponent(row?.props?.children, TableCell).reduce((acc, child) => {
      return [...acc, child.props];
    }, [] as ITableCellProps[]);

    return { ...row.props, options, cells };
  });

  return { columns, rows, actions };
};

const Table: React.FC<ITableProps> = props => {
  const classes = useStyles();
  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'));

  const {
    children,
    loading,
    onSortable,
    onActionsClick,
    stickyHeader,
    size,
    maxHeight,
    messages,
    stripedRows,
    initialOrdenation,
    ...rest
  } = props;

  const [options, setOptions] = React.useState<ITableOptionProps[]>([]);
  const [currentRow, setCurrentRow] = React.useState<ITableRow>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentItemCollapse, setCurrentItemCollapse] = React.useState<unknown | null>(null);

  const columns = useChildrenProps<ITableColumnProps>(children, TableColumn);
  const pagination = useFirstChildrenProps<ITablePagination>(children, TablePagination);
  const actions = React.useMemo(() => getActions(children), [children]);

  const rows: ITableRow[] = React.useMemo(() => {
    return React.Children.map(children, (child: React.ReactElement) => {
      if (!isReactComponent(child, TableRow)) return;

      const cells = getReactChildrenComponent(child?.props?.children, TableCell).reduce((acc, child) => {
        return [...acc, child.props];
      }, [] as ITableCellProps[]);

      const options = getReactChildrenComponent(child?.props?.children, TableActions).reduce((acc, child) => {
        return [...acc, ...getReactChildrenProps<ITableOptionProps>(child.props?.children, TableOption)];
      }, []);

      const collapse = getReactChildrenComponent(child?.props?.children, TableCollapse).map(child => {
        return { ...child.props, ...getCollapseData(child?.props?.children) };
      })?.[0];

      return { ...child.props, cells, options, collapse };
    });
  }, [children]);

  const handleSetCurrentRow = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, row: ITableRow = null) => {
      if (!row.data) {
        console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
      }

      setCurrentRow(row);
      setAnchorEl(event.currentTarget);
      setOptions(row?.options);
    },
    [setAnchorEl, setOptions, setCurrentRow]
  );

  const handleClickCollapse = React.useCallback(
    (row: ITableRow) => {
      const callback = row?.collapse?.onCollapse;
      const data = row?.data ?? {};

      if (currentItemCollapse && isEqual(currentItemCollapse, data)) {
        callback && callback(null);
        setCurrentItemCollapse(null);
        return;
      }

      callback && callback(data);
      setCurrentItemCollapse(data);
    },
    [currentItemCollapse]
  );

  const handleClickActions = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, data: unknown) => {
      onActionsClick && onActionsClick(event, data);
    },
    [onActionsClick]
  );

  const hasCollapseData = React.useMemo(() => rows.some(v => v.collapse), [rows]);

  const numberColumns = React.useMemo(
    () => columns?.length + Number(!!actions) + Number(hasCollapseData) || 0,
    [columns, actions, hasCollapseData]
  );

  const hasColumnFixed = React.useMemo(
    () => !!(actions?.fixed || (columns?.length && columns.filter(c => c.fixed).length)),
    [actions, columns]
  );

  const hasColumnAction = React.useMemo(() => columns?.some(c => c?.type === 'action'), [columns]);

  const tableMessages: ITableMessages = React.useMemo(
    () => ({
      empty: messages?.empty ? messages.empty : 'Nenhum registro encontrado.'
    }),
    [messages]
  );

  const contextValue = React.useMemo(
    () => ({
      loading,
      onSortable,
      messages: tableMessages,
      currentRow,
      setCurrentRow,
      columns,
      rows,
      actions,
      anchorEl,
      setAnchorEl,
      options,
      setOptions,
      pagination,
      hasCollapseData,
      hasColumnAction,
      numberColumns,
      isMobile,
      stripedRows,
      initialOrdenation
    }),
    [
      actions,
      anchorEl,
      columns,
      currentRow,
      hasCollapseData,
      hasColumnAction,
      loading,
      numberColumns,
      onSortable,
      options,
      pagination,
      rows,
      isMobile,
      tableMessages,
      stripedRows,
      initialOrdenation
    ]
  );

  return (
    <TableContextProvider value={contextValue}>
      {isMobile && (
        <div {...rest}>
          <RowsMobile
            currentItemCollapse={currentItemCollapse}
            setCurrentItemCollapse={setCurrentItemCollapse}
            handleSetCurrentRow={handleSetCurrentRow}
            handleClickCollapse={handleClickCollapse}
            handleClickActions={handleClickActions}
          />
        </div>
      )}

      {!isMobile && (
        <TableContainer style={{ maxHeight: !!maxHeight && maxHeight }}>
          <TableMUI stickyHeader={stickyHeader} size={size} className={clsx(hasColumnFixed && classes.fixed)} {...rest}>
            <Columns />
            <RowsDesktop
              currentItemCollapse={currentItemCollapse}
              setCurrentItemCollapse={setCurrentItemCollapse}
              handleSetCurrentRow={handleSetCurrentRow}
              handleClickCollapse={handleClickCollapse}
              handleClickActions={handleClickActions}
            />
          </TableMUI>
        </TableContainer>
      )}

      <Pagination />
      <Actions />
    </TableContextProvider>
  );
};

export default nestedComponent(withHoustonTheme(React.memo(Table)), {
  Column: TableColumn,
  Row: TableRow,
  Cell: TableCell,
  Actions: TableActions,
  Option: TableOption,
  Pagination: TablePagination,
  Collapse: TableCollapse
});
