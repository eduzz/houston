import * as React from 'react';

import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import clsx from 'clsx';

import { getReactChildrenComponent, getReactChildrenProps, isReactComponent } from '../Helpers/functions';
import { useFirstChildrenProps, useChildrenProps } from '../hooks/useChildrenProps';
import WrapperTheme from '../ThemeProvider/WrapperTheme';
import TableActions from './Actions';
import TableCell, { ITableCellProps } from './Cell';
import TableCollapse from './Collapse';
import TableColumn, { ITableColumnProps } from './Column';
import TableContextProvider from './context';
import {
  ITableActions,
  ITableCollapse,
  ITableMessages,
  ITableRow,
  ITableSortable,
  ITableSubComponents
} from './interfaces';
import Actions from './internals/Actions';
import Columns from './internals/Columns';
import Pagination from './internals/Pagination';
import RowsBase from './internals/Rows';
import TableOption, { ITableOptionProps } from './Option';
import TablePagination, { ITablePagination } from './Pagination';
import TableRow from './Row';

const useStyles = makeStyles(() =>
  createStyles({
    fixed: {
      whiteSpace: 'nowrap'
    }
  })
);

interface IProps extends Pick<TableProps, 'id' | 'className' | 'children'> {
  loading?: boolean;
  /**
   * Function called when clicking on an ordered column
   */
  onSortable?: (ordernation: ITableSortable) => void;
  /**
   * Default `false`
   */
  stickyHeader?: boolean;
  /**
   * Default `medium`
   */
  size?: Size;
  /**
   * Max Height table container
   */
  maxHeight?: number;
  /**
   * Messages for some situations, example: `when there is no date`
   */
  messages?: ITableMessages;
}

interface ITableProps
  extends ITableSubComponents,
    React.ForwardRefExoticComponent<IProps & React.RefAttributes<HTMLTableElement>> {}

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

const Table = React.forwardRef<HTMLTableElement, IProps>((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery<Theme>(theme.breakpoints.down('xs'));

  const { children, loading, onSortable, stickyHeader, size, maxHeight, messages } = props;

  const [options, setOptions] = React.useState<ITableOptionProps[]>([]);
  const [currentRow, setCurrentRow] = React.useState<ITableRow>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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

  const hasCollapseData = React.useMemo(() => !!rows.filter(v => v.collapse).length, [rows]);

  const numberColumns = React.useMemo(() => columns?.length + Number(!!actions) + Number(hasCollapseData) || 0, [
    columns,
    actions,
    hasCollapseData
  ]);

  const hasColumnFixed = React.useMemo(
    () => !!(actions?.fixed || (columns?.length && columns.filter(c => c.fixed).length)),
    [actions, columns]
  );

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
      numberColumns,
      isMobile
    }),
    [
      actions,
      anchorEl,
      columns,
      currentRow,
      hasCollapseData,
      loading,
      numberColumns,
      onSortable,
      options,
      pagination,
      rows,
      isMobile,
      tableMessages
    ]
  );

  return (
    <WrapperTheme>
      <TableContextProvider value={contextValue}>
        {isMobile && <RowsBase />}

        {!isMobile && (
          <TableContainer style={{ maxHeight: maxHeight && maxHeight }}>
            <TableMUI
              ref={ref}
              stickyHeader={stickyHeader}
              size={size}
              className={clsx(hasColumnFixed && classes.fixed)}
            >
              <Columns />
              <RowsBase />
            </TableMUI>
          </TableContainer>
        )}

        <Pagination />
        <Actions />
      </TableContextProvider>
    </WrapperTheme>
  );
}) as ITableProps;

Table.Column = TableColumn;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Actions = TableActions;
Table.Option = TableOption;
Table.Pagination = TablePagination;
Table.Collapse = TableCollapse;

export default Table;
