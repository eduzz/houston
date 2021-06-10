import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import createUseStyles, { IUseStyleParam } from '../styles/createUseStyles';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import MenuActions from './Actions/Menu';
import TableContext, { ITableActionShow, ITableContext } from './context';
import { ITableSort, TableComponent } from './interface';

let columnsKeyIncrementer = 0,
  actionsKeyIncremeter = 0;

export interface ITableProps extends Pick<TableProps, 'id' | 'children' | 'className'> {
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
  columnActionTitle?: string;
}

const useStyles = createUseStyles({
  tableContainer: ({ props }: IUseStyleParam<ITableProps>) => ({
    maxHeight: props.maxHeight
  })
});

const Table: TableComponent = React.memo<ITableProps>(props => {
  const { stickyHeader, size, id, children, loading, sort, onSort, stripedRows, columnActionTitle, className } = props;
  const classes = useStyles(props);

  const [openedMenuActions, , openMenuActions, closeMenuActions] = useBoolean(false);
  const [menuActionOptions, setMenuActionOptions] = React.useState<ITableActionShow>();

  const [columns, setColumns] = React.useState<string[]>(() => []);
  const [actions, setActions] = React.useState<string[]>([]);

  const onShowAction = React.useCallback(
    (data: ITableActionShow) => {
      setMenuActionOptions(data);
      openMenuActions();
    },
    [openMenuActions]
  );

  const registerColumn = React.useCallback(() => {
    const key = `column-${++columnsKeyIncrementer}`;

    setColumns(columns => [...columns.filter(k => k != key), key]);
    return () => setColumns(columns => columns.filter(k => k != key));
  }, []);

  const registerActions = React.useCallback(() => {
    const key = `table-action-option-${++actionsKeyIncremeter}`;

    setActions(options => [...options, key]);
    return () => setActions(options => options.filter(o => o !== key));
  }, []);

  const contextValue = React.useMemo<ITableContext>(
    () => ({
      loading: loading ?? false,
      sort,
      onSort,
      onShowAction,
      registerColumn,
      columns,
      actions,
      registerActions,
      stripedRows,
      columnActionTitle
    }),
    [
      loading,
      sort,
      onSort,
      onShowAction,
      registerColumn,
      columns,
      actions,
      registerActions,
      stripedRows,
      columnActionTitle
    ]
  );

  return (
    <WrapperTheme>
      <TableContext.Provider value={contextValue}>
        <TableContainer className={classes.tableContainer}>
          <TableMUI stickyHeader={stickyHeader} size={size} id={id} className={className}>
            {children}

            <MenuActions
              open={openedMenuActions}
              anchorEl={menuActionOptions?.anchorEl}
              options={menuActionOptions?.options}
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
