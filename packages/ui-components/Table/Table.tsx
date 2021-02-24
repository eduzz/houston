import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import { getReactChildrenComponent, getReactChildrenProps, isReactComponent } from '../Helpers/functions';
import { useFirstChildrenProps, useChildrenProps, ReactChild } from '../hooks/useChildrenProps';
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

type TablePropsExtends = 'id' | 'className' | 'children';

interface IProps extends Pick<TableProps, TablePropsExtends> {
  loading?: boolean;
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

const Table = React.forwardRef<HTMLTableElement, IProps>((props, ref) => {
  const { children, loading, onSortable, stickyHeader, size, maxHeight, messages } = props;

  const [options, setOptions] = React.useState<ITableOptionProps[]>([]);
  const [currentRow, setCurrentRow] = React.useState<ITableRow>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const getActions = React.useCallback((content: React.ReactChildren | React.ReactNode): ITableActions => {
    return React.Children.map(content, (child: React.ReactElement) => {
      if (!isReactComponent(child, TableActions)) return null;
      const options = getReactChildrenProps<ITableOptionProps>(child?.props?.children, TableOption);
      return { ...child.props, options };
    })?.[0];
  }, []);

  const pagination = useFirstChildrenProps<ITablePagination>(children, TablePagination);
  const columns = useChildrenProps<ITableColumnProps>(children, TableColumn);
  const actions = React.useMemo(() => getActions(children), [getActions, children]);

  const getCollapseData = React.useCallback(
    (content: React.ReactNode): ITableCollapse => {
      const actions = getActions(content);

      const rows: ITableRow[] = React.Children.map(content, (rowChild: ReactChild) => {
        if (!isReactComponent(rowChild, TableRow)) return null;

        const options = getReactChildrenComponent(rowChild?.props?.children, TableActions).reduce((acc, child) => {
          return [...acc, getReactChildrenProps<ITableOptionProps>(child.props?.children, TableOption)];
        }, []);

        const cells = getReactChildrenComponent(rowChild?.props?.children, TableCell).reduce((acc, child) => {
          return [...acc, child.props];
        }, [] as ITableCellProps[]);

        return { ...rowChild.props, options, cells };
      }).filter(data => !!data);

      return { columns, rows, actions };
    },
    [columns, getActions]
  );

  const rows: ITableRow[] | [] = React.useMemo(
    () =>
      React.Children.map(children, child => {
        let cells: ITableCellProps[] = [];
        let options: ITableOptionProps[] = [];
        let collapse: ITableCollapse = null;

        if (!child || !React.isValidElement(child) || child?.type !== TableRow) return null;

        React.Children.map(child?.props?.children, (c: React.ReactNode) => {
          if (!c || !React.isValidElement(c)) return;

          switch (c.type) {
            case TableCollapse:
              collapse = { ...c?.props, ...getCollapseData(c?.props?.children) };
              break;

            case TableActions:
              options = [
                ...options,
                ...c?.props?.children.map((opt: React.ReactNode) => {
                  if (!opt || !React.isValidElement(opt) || opt?.type !== TableOption) return;
                  return opt.props;
                })
              ];
              break;

            case TableCell:
              cells = [...cells, c.props];
              break;
          }
        });

        return { ...child.props, cells, options, collapse };
      }),
    [children, getCollapseData]
  );

  const hasCollapseData = !!rows.filter(v => v.collapse).length;
  const numberColumns = columns?.length + 1 + Number(hasCollapseData) || 1;

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
          <TableMUI ref={ref} stickyHeader={stickyHeader} size={size}>
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
