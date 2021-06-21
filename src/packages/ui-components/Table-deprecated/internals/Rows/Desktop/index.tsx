import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';

import ButtonIcon from '../../../../ButtonIcon';
import { useTableContext } from '../../../context';
import { IRowProps } from '../../../interfaces';
import Cell from '../../Cell/Desktop';
import Collapse from '../../Collapse';
import RowsEmpty from './Empty';
import RowLoader from './Loader';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      background: '#fff'
    },

    stripedRow: {
      background: theme.palette.grey[100]
    },

    hasEndAdornment: {
      borderBottom: 0
    },

    cellEndAdornment: {
      paddingTop: 0,
      '&:empty': {
        padding: 0
      }
    },

    wrapperIconActions: {
      cursor: 'pointer',
      marginRight: -8,

      '& svg': {
        color: theme.palette.grey[600]
      }
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

const Rows = React.memo<IRowProps>(
  ({ currentItemCollapse, handleSetCurrentRow, handleClickCollapse, handleClickActions }) => {
    const classes = useStyles();

    const {
      loading,
      columns,
      rows,
      currentRow,
      actions,
      hasCollapseData,
      hasColumnAction,
      numberColumns,
      stripedRows
    } = useTableContext();

    if (!loading && !rows?.length) {
      return <RowsEmpty />;
    }

    return (
      <TableBody>
        {loading && <RowLoader />}

        {!loading &&
          rows?.map((row, index) => {
            const { data = null, cells = [], collapse = null, className } = row;
            const isOdd = index % 2 === 1;

            const rowProps = {
              id: row?.id,
              tabIndex: row?.tabIndex,
              onClick: row?.onClick,
              onDoubleClick: row?.onDoubleClick
            };

            const hasEndAdornment = !!row?.endAdornment;

            return (
              <React.Fragment key={`table-row-${index}`}>
                <TableRow
                  hover
                  selected={currentRow && isEqual(currentRow?.data, data)}
                  className={clsx(classes.root, stripedRows && isOdd && classes.stripedRow, className)}
                  {...rowProps}
                >
                  {cells?.map((cell, i) => {
                    const currentIndex = i + 1;
                    const isFixed = columns[i]?.fixed && (currentIndex === 1 || currentIndex === numberColumns);

                    return (
                      <Cell
                        key={`row-${index}-cell-${i}`}
                        fixed={isFixed}
                        hasEndAdornment={hasEndAdornment}
                        {...cell}
                      />
                    );
                  })}

                  {hasColumnAction && (
                    <TableCell align='right' className={hasEndAdornment ? classes.hasEndAdornment : null}>
                      <div className={classes.wrapperIconActions}>
                        <ButtonIcon size='small' onClick={e => handleClickActions(e, data)}>
                          <MoreHorizIcon />
                        </ButtonIcon>
                      </div>
                    </TableCell>
                  )}

                  {!hasColumnAction && actions && (
                    <TableCell align='right' className={actions?.fixed ? classes.fixed : null}>
                      <div className={classes.wrapperIconActions}>
                        <ButtonIcon size='small' onClick={e => handleSetCurrentRow(e, row)}>
                          <MoreHorizIcon />
                        </ButtonIcon>
                      </div>
                    </TableCell>
                  )}

                  {hasCollapseData && (
                    <>
                      {!collapse && <TableCell key={`row-${index}-collapse`} className={classes.rowCellCollapse} />}

                      {collapse && (
                        <TableCell key={`row-${index}-collapse`} className={classes.rowCellCollapse}>
                          <IconButton size='small' onClick={() => handleClickCollapse(row)}>
                            {currentItemCollapse && isEqual(currentItemCollapse, data) ? (
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

                {row?.endAdornment && (
                  <TableRow className={clsx(classes.root, stripedRows && isOdd && classes.stripedRow)}>
                    <TableCell className={classes.cellEndAdornment} colSpan={numberColumns}>
                      {row.endAdornment}
                    </TableCell>
                  </TableRow>
                )}

                {collapse && <Collapse collapse={currentItemCollapse} row={row} />}
              </React.Fragment>
            );
          })}
      </TableBody>
    );
  }
);

export default Rows;
