import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import useBoolean from '@eduzz/houston-hooks/useBoolean';

import clsx from 'clsx';

import createUseStyles, { IUseStyleParam } from '../styles/createUseStyles';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import MenuActions from './Actions/Menu';
import TableContext, { ITableActionShow, ITableContext } from './context';
import { ITableSort, TableComponent } from './interface';
import { bindMutationObserver } from './observer';

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
  }),
  tableResponsive: ({ theme }: IUseStyleParam<ITableProps>) => ({
    display: 'block !important',
    '& > thead': {
      display: 'none'
    },
    '& > tbody': {
      display: 'block'
    },
    '& > tbody > tr': {
      display: 'flex',
      width: `calc(100% - ${theme.spacing(4)})`,
      flexWrap: 'wrap',
      position: 'relative',
      boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)',
      borderRadius: theme.radius(1),
      margin: theme.spacing(2),
      marginTop: 0,
      border: `1px solid ${theme.colors.grey[200]}`,
      padding: theme.spacing(3),
      boxSizing: 'border-box',
      paddingRight: 50,
      '&::after': {
        content: ' ',
        display: 'block',
        position: 'absolute',
        borderLeft: `1px solid ${theme.colors.grey[200]}`,
        width: 10,
        background: 'red',
        heigth: 10,
        right: 50,
        top: 0,
        bottom: 0
      }
    },
    '& > tbody > tr > td.table-action-cell': {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1)
    },
    '& > tbody > tr > td': {
      boxSizing: 'border-box',
      padding: 0,
      marginBottom: theme.spacing(2),
      flex: 1,
      border: 'none',
      flexGrow: 0,
      maxWidth: 'none',
      flexBasis: 'auto'
    },
    '& > tbody > tr > td.cell-size-true': {
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: '100%'
    },
    ...new Array(12).fill('a').reduce((acc, _, index) => {
      const size = index + 1;
      const percent = `${(size / 12) * 100}%`;

      return {
        ...acc,
        [`& > tbody > tr > td.cell-size-${size}`]: {
          flexGrow: 0,
          maxWidth: percent,
          flexBasis: percent
        }
      };
    }, {})
  })
});

const Table: TableComponent = React.memo<ITableProps>(props => {
  const { stickyHeader, size, id, children, loading, sort, onSort, stripedRows, columnActionTitle, className } = props;

  const tableRef = React.useRef<HTMLTableElement>();
  const classes = useStyles(props);

  const [openedMenuActions, , openMenuActions, closeMenuActions] = useBoolean(false);
  const [menuActionOptions, setMenuActionOptions] = React.useState<ITableActionShow>();

  const [rowMapLabel, setRowMapLabel] = React.useState<{ [rowKey: string]: string }>({});
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

    setColumns(columns => [...columns, key]);
    return () => setColumns(columns => columns.filter(c => c != key));
  }, []);

  const registerActions = React.useCallback(() => {
    const key = `table-action-option-${++actionsKeyIncremeter}`;

    setActions(options => [...options, key]);
    return () => setActions(options => options.filter(o => o !== key));
  }, []);

  React.useEffect(() => {
    const unbind = bindMutationObserver(tableRef.current, rowMap => {
      setRowMapLabel(rowMap);
    });
    return () => unbind();
  }, []);

  const contextValue = React.useMemo<ITableContext>(
    () => ({
      loading: loading ?? false,
      sort,
      onSort,
      onShowAction,
      registerColumn,
      rowMapLabel,
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
      rowMapLabel,
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
          <TableMUI
            stickyHeader={stickyHeader}
            size={size}
            id={id}
            ref={tableRef}
            className={clsx(classes.tableResponsive, className)}
          >
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
