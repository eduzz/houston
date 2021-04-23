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
import { IRowProps, ITableRow } from '../../../interfaces';
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
      '&:nth-of-type(even)': {
        background: theme.palette.grey[100]
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
    const [lazyRows, setLazyRows] = React.useState<ITableRow[]>([]);

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

    React.useEffect(() => {
      const recursive = (index = 0): any => {
        const newSlice = rows?.slice(index * 10, 10) ?? [];

        if (!newSlice.length) return null;

        setLazyRows(rows => [...rows, ...newSlice]);
        return setTimeout(() => recursive(index + 1), 0);
      };

      return () => clearTimeout(recursive());
    }, [rows]);

    if (!loading && !rows?.length) {
      return <RowsEmpty />;
    }

    return (
      <TableBody>
        {loading && <RowLoader />}

        {!loading &&
          lazyRows.map((row, index) => {
            const { data = null, cells = [], collapse = null, className, ...rest } = row;

            const rowProps = { ...rest };
            delete rowProps.options;

            return (
              <React.Fragment key={`table-row-${index}`}>
                <TableRow
                  hover
                  selected={currentRow && isEqual(currentRow?.data, data)}
                  className={clsx(classes.root, stripedRows && classes.stripedRow, className && className)}
                  {...rowProps}
                >
                  {cells?.map((cell, i) => {
                    const currentIndex = i + 1;
                    const isFixed = columns[i]?.fixed && (currentIndex === 1 || currentIndex === numberColumns);
                    return <Cell key={`row-${index}-cell-${i}`} fixed={isFixed} {...cell} />;
                  })}

                  {hasColumnAction && (
                    <TableCell align='right'>
                      <div className={classes.wrapperIconActions}>
                        <ButtonIcon size='small' onClick={() => handleClickActions(data)}>
                          <MoreHorizIcon />
                        </ButtonIcon>
                      </div>
                    </TableCell>
                  )}

                  {!hasColumnAction && actions && (
                    <TableCell align='right' className={actions?.fixed && classes.fixed}>
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

                {collapse && <Collapse collapse={currentItemCollapse} row={row} />}
              </React.Fragment>
            );
          })}
      </TableBody>
    );
  }
);

export default Rows;
