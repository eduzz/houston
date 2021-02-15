import * as React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { useTableContext } from '../../context';
import { ITableSortable } from '../../interfaces';

const Columns: React.FC<{}> = () => {
  const { loading, columns, actions, onSortable, rows, hasCollapseData } = useTableContext();

  const [sortable, setSortable] = React.useState<ITableSortable | null>(null);

  const handleClickSortable = React.useCallback(
    (field: string) => {
      if (sortable?.field !== field) {
        setSortable({ field, order: 'asc' });
        onSortable({ field, order: 'asc' });
        return;
      }

      if (sortable?.field === field && sortable.order === 'asc') {
        setSortable({ ...sortable, order: 'desc' });
        onSortable({ field, order: 'desc' });
        return;
      }

      setSortable(null);
      onSortable(null);
    },
    [sortable, onSortable]
  );

  if (!columns?.length) {
    return null;
  }

  return (
    <TableHead>
      <TableRow>
        {columns.map(column => {
          const currentSortable = sortable?.field === column.field;
          const columnProps = { ...column };
          delete columnProps.sortable;

          return (
            <TableCell
              key={`column-${column.field}`}
              {...columnProps}
              sortDirection={currentSortable ? sortable?.order : false}
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
          <TableCell align={actions?.align}>
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
