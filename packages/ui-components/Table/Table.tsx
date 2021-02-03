import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import WrapperTheme from '../ThemeProvider/WrapperTheme';
import TableActions from './Actions';
import Cell, { ITableCellProps } from './Cell';
import TableColumn, { ITableColumnProps } from './Column';
import TableContextProvider from './context';
import { ITableActions, ITableRow, ITableSortable, ITableSubComponents } from './interfaces';
import Actions from './internals/Actions';
import Columns from './internals/Columns';
import Rows from './internals/Rows';
import Option, { ITableOptionProps } from './Option';
import Row from './Row';

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
  maxHeight?: number;
  /**
   * Messages for some situations, example: `when there is no date`
   */
  messages?: {
    noData?: React.ReactNode;
  };
}

interface ITableProps
  extends ITableSubComponents,
    React.ForwardRefExoticComponent<IProps & React.RefAttributes<HTMLTableElement>> {}

const Table = React.forwardRef<HTMLTableElement, IProps>((props, ref) => {
  const { children, loading, onSortable, stickyHeader, size, maxHeight, messages } = props;

  const [options, setOptions] = React.useState<ITableOptionProps[]>([]);
  const [currentRow, setCurrentRow] = React.useState<unknown>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const columns: ITableColumnProps[] = React.useMemo(
    () =>
      React.Children.map(children, child => {
        if (!child || !React.isValidElement(child) || child?.type !== TableColumn) {
          return;
        }

        return { ...child.props };
      }),
    [children]
  );

  const rows: ITableRow[] = React.useMemo(
    () =>
      React.Children.map(children, child => {
        if (!child || !React.isValidElement(child) || child?.type !== Row) {
          return null;
        }

        let cells: ITableCellProps[] = [];
        let options: ITableOptionProps[] = [];

        React.Children.map(child.props.children, (c: React.ReactNode) => {
          if (!c || !React.isValidElement(c)) {
            return;
          }

          if (c?.type === TableActions) {
            options = [
              ...options,
              ...c?.props?.children.map((opt: React.ReactNode) => {
                if (!opt || !React.isValidElement(opt) || opt?.type !== Option) {
                  return;
                }

                return opt.props;
              })
            ];

            return;
          }

          if (c?.type === Cell) {
            cells = [...cells, c.props];
            return;
          }

          return;
        });

        const props = { ...child.props };
        delete props?.children;

        return { ...props, cells, options };
      }),
    [children]
  );

  const actions: ITableActions | undefined = React.useMemo(
    () =>
      React.Children.map(children, child => {
        if (!child || !React.isValidElement(child) || child?.type !== TableActions) {
          return null;
        }

        const options = React.Children.map(child.props.children, option => {
          if (!option || !React.isValidElement(option) || option.type !== Option) {
            return;
          }

          return option.props;
        });

        const props = { ...child.props };
        delete props?.children;

        return { ...props, options };
      })?.[0],
    [children]
  );

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

          anchorEl,
          setAnchorEl,

          options,
          setOptions
        }}
      >
        <TableContainer style={{ maxHeight: maxHeight && maxHeight }}>
          <TableMUI ref={ref} stickyHeader={stickyHeader} size={size}>
            <Columns />
            <Rows />
          </TableMUI>
        </TableContainer>

        <Actions />
      </TableContextProvider>
    </WrapperTheme>
  );
}) as ITableProps;

Table.Column = TableColumn;
Table.Row = Row;
Table.Cell = Cell;
Table.Actions = TableActions;
Table.Option = Option;

export default Table;
