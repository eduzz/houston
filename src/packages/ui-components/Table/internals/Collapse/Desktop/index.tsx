import * as React from 'react';

import CollapseMUI from '@material-ui/core/Collapse';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useLazyArray from '@eduzz/houston-hooks/useLazyArray';

// @ts-ignore
import isEqual from 'lodash/isEqual';

import { useTableContext } from '../../../context';
import Cell from '../../Cell/Desktop';
import MenuActions from '../../MenuActions';
import { useCollapse } from '../context';
import LoaderCollapse from './Loader';

const useStyles = makeStyles(theme =>
  createStyles({
    rowCollapse: {
      '& > *': {
        borderBottom: 'unset'
      }
    },

    cellCollapse: {
      paddingTop: 0,
      paddingBottom: 0,
      background: theme.palette.grey[200]
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
  })
);

const Collapse = React.memo(() => {
  const classes = useStyles();
  const { numberColumns } = useTableContext();

  const { collapse, row, handleSetCurrentRow, anchorEl, handleCloseActions, options, currentRow } = useCollapse();
  const { loading = false, columns = [], actions = null, type = 'table', rows } = row?.collapse;

  const numberColumnsCollapse = React.useMemo(() => columns?.length + 1 + Number(!!actions) || 1, [columns, actions]);

  const lazyRows = useLazyArray(rows);

  return (
    <>
      <TableRow className={classes.rowCollapse}>
        <TableCell colSpan={numberColumns} className={classes.cellCollapse}>
          <CollapseMUI in={collapse && isEqual(collapse, row.data)} timeout={350} unmountOnExit>
            <Table size='small'>
              {!loading && type === 'table' && (
                <TableHead>
                  <TableRow>
                    {columns.map(column => {
                      const columnProps = { ...column };
                      delete columnProps.sortable;

                      return (
                        <TableCell key={`collapse-column-${column.field}`} {...columnProps}>
                          {column.label}
                        </TableCell>
                      );
                    })}

                    {actions && (
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
                  lazyRows?.map((row, index) => (
                    <TableRow key={`collapse-row-${index}`}>
                      {row?.cells?.map((cell, i) => (
                        <Cell key={`collapse-row-${index}-cell-${i}`} list={type === 'list'} {...cell} />
                      ))}

                      {actions && (
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
