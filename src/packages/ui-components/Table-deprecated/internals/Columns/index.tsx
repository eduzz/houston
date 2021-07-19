import * as React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import clsx from 'clsx';

import createUseStyles from '../../../styles/createUseStyles';
import { useTableContext } from '../../context';
import { ITableSortable } from '../../interfaces';

const useStyles = createUseStyles(theme => ({
  fixed: {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    background: theme.colors.grey[100],
    zIndex: 2
  },

  striped: {
    background: 'transparent'
  }
}));

const Columns = React.memo(() => {
  const classes = useStyles();

  const {
    loading,
    columns,
    actions,
    onSortable,
    rows,
    hasCollapseData,
    numberColumns,
    hasColumnAction,
    stripedRows,
    initialOrdenation
  } = useTableContext();

  const [sortable, setSortable] = React.useState<ITableSortable | null>(initialOrdenation || null);

  const handleClickSortable = React.useCallback(
    (field: string) => {
      if (sortable?.field !== field) {
        setSortable({ field, order: 'asc' });
        onSortable && onSortable({ field, order: 'asc' });
        return;
      }

      if (sortable?.field === field && sortable.order === 'asc') {
        setSortable({ ...sortable, order: 'desc' });
        onSortable && onSortable({ field, order: 'desc' });
        return;
      }

      setSortable(null);
      onSortable && onSortable(null);
    },
    [sortable, onSortable]
  );

  const columnAction = React.useMemo(() => columns?.filter(c => c?.type === 'action'), [columns]);

  if (!columns?.length) {
    return null;
  }

  return (
    <TableHead>
      <TableRow>
        {columns
          .filter(c => c?.type !== 'action')
          .map((column, index) => {
            const currentSortable = sortable?.field === column.field;
            const currentIndex = index + 1;
            const isFixed = column?.fixed && (currentIndex === 1 || currentIndex === numberColumns);
            const label = column?.label || ' ';

            return (
              <TableCell
                id={column?.id}
                align={column?.align}
                className={clsx(
                  isFixed && !loading && rows.length && classes.fixed,
                  column?.className,
                  stripedRows && classes.striped
                )}
                key={`column-${column.field}-${index}`}
                sortDirection={currentSortable ? sortable?.order : false}
                width={column?.width}
              >
                {column?.sortable && (
                  <TableSortLabel
                    active={currentSortable}
                    disabled={loading || rows?.length === 0}
                    direction={currentSortable ? sortable?.order : 'asc'}
                    onClick={column?.sortable ? () => handleClickSortable(column.field) : null}
                  >
                    {label}
                  </TableSortLabel>
                )}

                {!column?.sortable ? label : ' '}
              </TableCell>
            );
          })}
        {hasColumnAction && (
          <TableCell align={columnAction[0]?.align} width={50} className={stripedRows ? classes.striped : null}>
            {columnAction[0]?.label === false && <>&nbsp;</>}
            {!columnAction[0]?.label && columnAction[0].label !== false ? 'Ações' : columnAction[0].label}
          </TableCell>
        )}
        {!hasColumnAction && actions && (
          <TableCell
            align={actions?.align}
            className={clsx(actions?.fixed && classes.fixed, stripedRows && classes.striped)}
            width={50}
          >
            {actions?.label === false && <>&nbsp;</>}
            {!actions?.label && actions.label !== false ? 'Ações' : actions.label}
          </TableCell>
        )}
        {hasCollapseData && <TableCell width={50} />}
      </TableRow>
    </TableHead>
  );
});

export default Columns;
