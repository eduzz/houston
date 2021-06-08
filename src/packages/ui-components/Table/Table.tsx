import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import createUseStyles, { IUseStyleParam } from '../styles/createUseStyles';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import { ITableSort, TableComponent } from './interface';

export interface ITableProps extends Pick<TableProps, 'id' | 'children'> {
  loading?: boolean;
  initialFieldOrder?: string;
  /**
   * Default `desc`
   */
  initialDirectionOrder?: 'asc' | 'desc';
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
  emptyNessage?: string;
  stripedRows?: boolean;
}

const useStyles = createUseStyles({
  tableContainer: ({ props }: IUseStyleParam<ITableProps>) => ({
    maxHeight: props.maxHeight
  })
});

const Table: TableComponent = React.memo<ITableProps>(props => {
  const { stickyHeader, size, id, children } = props;
  const classes = useStyles(props);

  return (
    <WrapperTheme>
      <TableContainer className={classes.tableContainer}>
        <TableMUI stickyHeader={stickyHeader} size={size} id={id}>
          {children}
        </TableMUI>
      </TableContainer>
    </WrapperTheme>
  );
});

export default Table;
