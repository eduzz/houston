import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

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
import Rows from './internals/Rows';
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
  const { children, loading, onSortable, stickyHeader, size, maxHeight, messages } = props;

  const [options, setOptions] = React.useState<ITableOptionProps[]>([]);
  const [currentRow, setCurrentRow] = React.useState<ITableRow>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const pagination = useFirstChildrenProps<ITablePagination>(children, TablePagination);
  const columns = useChildrenProps<ITableColumnProps>(children, TableColumn);
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

  const hasCollapseData = !!rows.filter(v => v.collapse).length;
  const numberColumns = columns?.length + Number(!!actions) + Number(hasCollapseData) || 0;
  const hasColumnFixed = !!(actions?.fixed || (columns?.length && columns.filter(c => c.fixed).length));

  const contextValue = React.useMemo(
    () => ({
      loading,
      onSortable,
      messages,
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
      numberColumns
    }),
    [
      actions,
      anchorEl,
      columns,
      currentRow,
      hasCollapseData,
      loading,
      messages,
      numberColumns,
      onSortable,
      options,
      pagination,
      rows
    ]
  );

  return (
    <WrapperTheme>
      <TableContextProvider value={contextValue}>
        <TableContainer style={{ maxHeight: maxHeight && maxHeight }}>
          <TableMUI ref={ref} stickyHeader={stickyHeader} size={size} className={clsx(hasColumnFixed && classes.fixed)}>
            <Columns />
            <Rows />
          </TableMUI>
        </TableContainer>

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
