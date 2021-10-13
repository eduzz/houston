import * as React from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CollapseMUI from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// @ts-ignore
import isEqual from 'lodash/isEqual';

import createUseStyles from '../../../../styles/createUseStyles';
import { useTableContext } from '../../../context';
import Cell from '../../Cell/Desktop';
import MenuActions from '../../MenuActions';
import { useCollapse } from '../context';
import LoaderCollapse from './Loader';

const useStyles = createUseStyles(theme => ({
  rowCollapse: {
    '& > *': {
      borderBottom: 'unset'
    }
  },

  cellCollapse: {
    paddingTop: 0,
    paddingBottom: 0,
    background: theme.colors.grey[200]
  },

  wrapperButtonActions: {
    display: 'inline-flex',
    cursor: 'pointer',
    lineHeight: 0,
    position: 'relative',
    top: 2
  },

  list: {
    borderBottom: 0
  }
}));

const Collapse = React.memo(() => {
  const classes = useStyles();
  const { numberColumns } = useTableContext();

  const { collapse, row, handleSetCurrentRow, anchorEl, handleCloseActions, options, currentRow } = useCollapse();
  const { loading = false, columns = [], actions = null, type = 'table', rows, onActionsClick } = row?.collapse;

  const columnAction = React.useMemo(() => columns.find(c => c.type === 'action'), [columns]);

  const numberColumnsCollapse = React.useMemo(() => columns?.length + 1 + Number(!!actions) || 1, [columns, actions]);

  const rowData = row.data;

  return (
    <>
      <TableRow className={classes.rowCollapse}>
        <TableCell colSpan={numberColumns} className={classes.cellCollapse}>
          <CollapseMUI in={collapse && isEqual(collapse, row.data)} timeout={350} unmountOnExit>
            <Table size='small'>
              {!loading && type === 'table' && (
                <TableHead>
                  <TableRow>
                    {columns
                      .filter(c => c.type !== 'action')
                      .map(column => {
                        const columnProps = { ...column };
                        delete columnProps.sortable;

                        return (
                          <TableCell key={`collapse-column-${column.field}`} {...columnProps}>
                            {column.label}
                          </TableCell>
                        );
                      })}

                    {!!columnAction && (
                      <TableCell align={columnAction?.align}>
                        {columnAction?.label === false && <>&nbsp;</>}
                        {!columnAction?.label && columnAction.label !== false ? 'Ações' : columnAction.label}
                      </TableCell>
                    )}

                    {!columnAction && actions && (
                      <TableCell align={actions?.align}>
                        {actions?.label === false && <>&nbsp;</>}
                        {!actions?.label && actions.label !== false ? 'Ações' : actions.label}
                      </TableCell>
                    )}
                  </TableRow>
                </TableHead>
              )}

              <TableBody>
                {loading && <LoaderCollapse columns={numberColumnsCollapse} />}

                {!loading &&
                  rows?.map((row, index) => (
                    <TableRow key={`collapse-row-${index}`}>
                      {row?.cells?.map((cell, i) => (
                        <Cell key={`collapse-row-${index}-cell-${i}`} list={type === 'list'} {...cell} />
                      ))}

                      {!!columnAction && (
                        <TableCell align='right' classes={{ root: type === 'list' && classes.list }}>
                          <div className={classes.wrapperButtonActions} onClick={e => onActionsClick(e, rowData)}>
                            <MoreHorizIcon />
                          </div>
                        </TableCell>
                      )}

                      {!columnAction && actions && (
                        <TableCell align='right' classes={{ root: type === 'list' && classes.list }}>
                          <div className={classes.wrapperButtonActions} onClick={e => handleSetCurrentRow(e, row)}>
                            <MoreHorizIcon />
                          </div>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CollapseMUI>
        </TableCell>
      </TableRow>

      <MenuActions
        anchorEl={anchorEl}
        onClose={handleCloseActions}
        options={!options?.length ? actions?.options : options}
        currentRow={currentRow}
      />
    </>
  );
});

export default Collapse;
