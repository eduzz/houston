import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import createUseStyles, { IUseStyleParam } from '../styles/createUseStyles';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import TableContext, { ITableContext } from './context';
import { ITableSort, TableComponent } from './interface';

let columnsKeyIncrementer = 0;

export interface ITableProps extends Pick<TableProps, 'id' | 'children'> {
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
}

const useStyles = createUseStyles({
  tableContainer: ({ props }: IUseStyleParam<ITableProps>) => ({
    maxHeight: props.maxHeight
  })
});

const Table: TableComponent = React.memo<ITableProps>(props => {
  const { stickyHeader, size, id, children, loading, sort, onSort, stripedRows } = props;
  const classes = useStyles(props);

  const [columns, setColumns] = React.useState<string[]>(() => []);

  const registerColumn = React.useCallback(() => {
    const key = `column-${++columnsKeyIncrementer}`;

    setColumns(columns => [...columns.filter(k => k != key), key]);
    return () => setColumns(columns => columns.filter(k => k != key));
  }, []);

  const contextValue = React.useMemo<ITableContext>(
    () => ({
      loading: loading ?? false,
      sort,
      onSort,
      registerColumn,
      columns,
      stripedRows
    }),
    [columns, loading, onSort, registerColumn, sort, stripedRows]
  );

  return (
    <WrapperTheme>
      <TableContext.Provider value={contextValue}>
        <TableContainer className={classes.tableContainer}>
          <TableMUI stickyHeader={stickyHeader} size={size} id={id}>
            {children}
          </TableMUI>
        </TableContainer>
      </TableContext.Provider>
    </WrapperTheme>
  );
});

export default Table;
