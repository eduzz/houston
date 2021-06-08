import * as React from 'react';

import TableMUI, { Size, TableProps } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import createUseStyles, { IUseStyleParam } from '../styles/createUseStyles';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import { ITableAction, ITableItem } from './interface';

interface IProps extends Pick<TableProps, 'id' | 'children'> {
  loading?: boolean;
  initialFieldOrder?: string;
  /**
   * Default `desc`
   */
  initialOrder?: 'asc' | 'desc';
  /**
   * Function called when clicking on an ordered column
   */
  onSortable?: (ordernation: { field: string; order: 'asc' | 'desc' }) => void;
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

  data: any[];
  keyExtractor?: (param: ITableItem<any>) => string;
  renderActions?: (param: ITableItem<any>) => ITableAction[];
  renderRow: (param: ITableItem<any>) => React.ReactNode | React.Component<ITableItem<any>>;
}

const useStyles = createUseStyles({
  tableContainer: ({ props }: IUseStyleParam<IProps>) => ({
    maxHeight: props.maxHeight
  })
});

const Table = React.memo<IProps>(props => {
  const { stickyHeader, size, id, data, renderRow: renderRowProp, keyExtractor: keyExtractorProp } = props;
  const classes = useStyles(props);

  const renderRow = React.useCallback(
    (params: ITableItem<any>) => {
      if (typeof renderRowProp === 'function') {
        return renderRowProp(params);
      }

      const Component = renderRowProp as any;
      return <Component {...params} />;
    },
    [renderRowProp]
  );

  const keyExtractor = React.useCallback(
    (params: ITableItem<any>) => {
      if (keyExtractorProp) return keyExtractorProp(params);
      if (params.data.id) return params.data.id.toString();
      if (params.data.key) return params.data.key.toString();

      console.warn(
        '@eduzz/houston-ui: Table - Não foi possível encontrar uma prop id ou key no data, por isso é necessário passar a prop keyExtractor para evitar perda de performance ou side effects.'
      );
      return params.index.toString();
    },
    [keyExtractorProp]
  );

  return (
    <WrapperTheme>
      <TableContainer className={classes.tableContainer}>
        <TableMUI stickyHeader={stickyHeader} size={size} id={id}>
          <TableBody>
            {data?.map((item, index) => {
              const params = { data: item, index, striped: false };
              const key = keyExtractor(params);
              return <TableRow key={key}>{renderRow(params)}</TableRow>;
            })}
          </TableBody>
        </TableMUI>
      </TableContainer>
    </WrapperTheme>
  );
});

export default Table;
