import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// eslint-disable-next-line no-restricted-imports
import * as lodash from 'lodash';

import { useTableContext } from '../../context';
import { ITableRow } from '../../interfaces';
import Cell from '../Cell';
import Collapse from '../Collapse';

const useStyles = makeStyles(() =>
  createStyles({
    loader: {
      padding: 16
    },

    buttonAction: {
      display: 'inline-flex',
      cursor: 'pointer',
      lineHeight: 0,
      position: 'relative',
      top: 2
    }
  })
);

const Rows: React.FC<{}> = () => {
  const classes = useStyles();

  const {
    loading,
    rows,
    currentRow,
    actions,
    setAnchorEl,
    setOptions,
    setCurrentRow,
    messages,
    hasCollapseData,
    numberColumns
  } = useTableContext();

  const [collapse, setCollapse] = React.useState<unknown | null>(null);

  const handleSetCurrentRow = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, row: ITableRow = null) => {
      if (!row.data) {
        console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
      }

      setCurrentRow(row);
      setAnchorEl(event.currentTarget);
      setOptions(row?.options);
    },
    [setAnchorEl, setOptions, setCurrentRow]
  );

  const handleClickCollapse = React.useCallback(
    (row: Partial<ITableRow>) => {
      const callback = row?.collapse?.onCollapse;

      if (collapse && lodash.isEqual(collapse, row?.data)) {
        callback(null);
        setCollapse(null);
        return;
      }

      callback(row?.data);
      setCollapse(row?.data);
    },
    [collapse]
  );

  if (!rows?.length) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align='center' colSpan={numberColumns}>
            <div className={classes.loader}>{messages?.empty ? messages.empty : 'Nenhum registro encontrado.'}</div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {loading && (
        <TableRow>
          <TableCell align='center' colSpan={numberColumns}>
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          </TableCell>
        </TableRow>
      )}

      {!loading &&
        rows.map((row, index) => (
          <React.Fragment key={`table-row-${index}`}>
            <TableRow hover selected={currentRow && lodash.isEqual(currentRow?.data, row.data)}>
              {row?.cells?.map((cell, i) => (
                <Cell key={`row-${index}-cell-${i}`} {...cell} />
              ))}

              {actions && (
                <TableCell align='right'>
                  <div className={classes.buttonAction} onClick={e => handleSetCurrentRow(e, row)}>
                    <MoreHorizIcon />
                  </div>
                </TableCell>
              )}

              {hasCollapseData && (
                <>
                  {!row?.collapse && <TableCell key={`row-${index}-collapse`} />}

                  {row?.collapse && (
                    <TableCell key={`row-${index}-collapse`}>
                      <IconButton size='small' onClick={() => handleClickCollapse(row)}>
                        {collapse && lodash.isEqual(collapse, row.data) ? (
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

            <Collapse collapse={collapse} row={row} />
          </React.Fragment>
        ))}
    </TableBody>
  );
};

export default React.memo(Rows);
