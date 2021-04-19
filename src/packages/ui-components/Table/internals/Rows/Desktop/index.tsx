import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// @ts-ignore
import isEqual from 'lodash/isEqual';

import { useTableContext } from '../../../context';
import Cell from '../../Cell/Desktop';
import Collapse from '../../Collapse';
import { useRow } from '../context';
import RowsEmpty from './Empty';
import RowLoader from './Loader';

const useStyles = makeStyles(theme =>
  createStyles({
    wrapperIconActions: {
      display: 'inline-flex',
      cursor: 'pointer',
      lineHeight: 0,
      position: 'relative',
      top: 2
    },

    fixed: {
      position: 'sticky',
      top: 0,
      right: 0,
      left: 0,
      background: theme.palette.grey[100]
    },

    rowCellCollapse: {
      padding: '10px 0'
    }
  })
);

const Rows = React.memo(() => {
  const classes = useStyles();
  const { currentItemCollapse, handleSetCurrentRow, handleClickCollapse } = useRow();

  const { loading, columns, rows, currentRow, actions, hasCollapseData, numberColumns } = useTableContext();

  if (loading) {
    return <RowLoader />;
  }

  if (!loading && !rows?.length) {
    return <RowsEmpty />;
  }

  return (
    <TableBody>
      {rows.map((row, index) => (
        <React.Fragment key={`table-row-${index}`}>
          <TableRow
            hover
            selected={currentRow && isEqual(currentRow?.data, row.data)}
            onClick={row?.onClick && row.onClick}
            onDoubleClick={row?.onDoubleClick && row.onDoubleClick}
          >
            {row?.cells?.map((cell, i) => {
              const currentIndex = i + 1;
              const isFixed = columns[i]?.fixed && (currentIndex === 1 || currentIndex === numberColumns);

              return <Cell key={`row-${index}-cell-${i}`} fixed={isFixed} {...cell} />;
            })}

            {actions && (
              <TableCell align='right' className={actions?.fixed && classes.fixed}>
                <div className={classes.wrapperIconActions} onClick={e => handleSetCurrentRow(e, row)}>
                  <MoreHorizIcon />
                </div>
              </TableCell>
            )}

            {hasCollapseData && (
              <>
                {!row?.collapse && <TableCell key={`row-${index}-collapse`} className={classes.rowCellCollapse} />}

                {row?.collapse && (
                  <TableCell key={`row-${index}-collapse`} className={classes.rowCellCollapse}>
                    <IconButton size='small' onClick={() => handleClickCollapse(row)}>
                      {currentItemCollapse && isEqual(currentItemCollapse, row.data) ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                )}
              </>
            )}
          </TableRow>

          {row?.collapse && <Collapse collapse={currentItemCollapse} row={row} />}
        </React.Fragment>
      ))}
    </TableBody>
  );
});

export default Rows;
