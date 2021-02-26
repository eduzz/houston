import * as React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import clsx from 'clsx';

import { useTableContext } from '../../context';
import { ITableSortable } from '../../interfaces';

const useStyles = makeStyles(theme =>
  createStyles({
    fixed: {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      background: theme.palette.grey[100],
      zIndex: 2
    }
  })
);

const Columns: React.FC<{}> = () => {
  const classes = useStyles();
  const { loading, columns, actions, onSortable, rows, hasCollapseData, numberColumns } = useTableContext();

  const [sortable, setSortable] = React.useState<ITableSortable | null>(null);

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

  if (!columns?.length) {
    return null;
  }

  return (
    <TableHead>
      <TableRow>
        {columns.map((column, index) => {
          const currentSortable = sortable?.field === column.field;
          const currentIndex = index + 1;
          const isFixed = column?.fixed && (currentIndex === 1 || currentIndex === numberColumns);

          return (
            <TableCell
              id={column?.id}
              align={column?.align}
              className={clsx(isFixed && !loading && rows.length && classes.fixed, column?.className)}
              key={`column-${column.field}`}
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
                  {column.label}
                </TableSortLabel>
              )}

              {!column?.sortable && column.label}
            </TableCell>
          );
        })}

        {actions && (
          <TableCell align={actions?.align} className={actions?.fixed && classes.fixed}>
            {actions?.label === false && <>&nbsp;</>}
            {!actions?.label && actions.label !== false ? 'Ações' : actions.label}
          </TableCell>
        )}

        {hasCollapseData && <TableCell width={50} />}
      </TableRow>
    </TableHead>
  );
};

export default React.memo(Columns);
