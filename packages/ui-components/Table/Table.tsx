import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

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
  const [currentRow, setCurrentRow] = React.useState<unknown>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const getActions = React.useCallback((content: React.ReactChildren | React.ReactNode) => {
    const actions: ITableActions | undefined = React.Children.map(content, (child: React.ReactNode) => {
      if (!child || !React.isValidElement(child) || child?.type !== TableActions) return null;

      const options = React.Children.map(child?.props?.children, option => {
        if (!option || !React.isValidElement(option) || option?.type !== TableOption) return;
        return option?.props;
      });

      return { ...child.props, options };
    })?.[0];

    return actions || null;
  }, []);

  const getCollapseData = React.useCallback(
    (content: React.ReactNode) => {
      const actions = getActions(content);

      const rows: ITableRow[] = React.Children.map(content, (child: React.ReactNode) => {
        let cells: ITableCellProps[] = [];
        let options: ITableOptionProps[] = [];

        if (!child || !React.isValidElement(child) || child?.type !== TableRow) return null;

        React.Children.map(child?.props?.children, (c: React.ReactNode) => {
          if (!c || !React.isValidElement(c)) return;

          if (c?.type === TableActions) {
            options = [
              ...options,
              ...c?.props?.children.map((opt: React.ReactNode) => {
                if (!opt || !React.isValidElement(opt) || opt?.type !== TableOption) return;
                return opt.props;
              })
            ];

            return;
          }

          if (c?.type === TableCell) {
            cells = [...cells, c?.props];
            return;
          }
        });

        return { ...child.props, options, cells };
      });

      return { rows, actions };
    },
    [getActions]
  );

  const columns: ITableColumnProps[] | [] = React.useMemo(
    () =>
      React.Children.map(children, child => {
        if (!child || !React.isValidElement(child) || child?.type !== TableColumn) return;
        return { ...child.props };
      }),
    [children]
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

          if (c.type === TableCollapse) {
            collapse = { ...c?.props, ...getCollapseData(c?.props?.children) };
            return;
          }

          if (c.type === TableActions) {
            options = [
              ...options,
              ...c?.props?.children.map((opt: React.ReactNode) => {
                if (!opt || !React.isValidElement(opt) || opt?.type !== TableOption) return;
                return opt.props;
              })
            ];

            return;
          }

          if (c.type === TableCell) {
            cells = [...cells, c.props];
            return;
          }
        });

        return { ...child.props, cells, options, collapse };
      }),
    [children, getCollapseData]
  );

  const actions = React.useMemo(() => getActions(children), [getActions, children]);

  const pagination: ITablePagination | undefined = React.useMemo(
    () =>
      React.Children.map(children, child => {
        if (!child || !React.isValidElement(child) || child?.type !== TablePagination) return null;
        return { ...child.props };
      })?.[0],
    [children]
  );

  const hasCollapseData = !!rows.filter(v => v.collapse).length;

  console.log(rows);

  return (
    <WrapperTheme>
      <TableContextProvider
        value={{
          loading,
          onSortable,
          messages,

          currentRow,
          setCurrentRow,

          columns,
          rows,
          actions,
          hasCollapseData,

          anchorEl,
          setAnchorEl,

          options,
          setOptions,

          pagination
        }}
      >
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
