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

// @ts-ignore
import isEqual from 'lodash/isEqual';

import { useTableContext } from '../../context';
import { ITableRow } from '../../interfaces';
import Cell from '../Cell';
import Collapse from '../Collapse';

const useStyles = makeStyles(theme =>
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
    },

    fixed: {
      position: 'sticky',
      top: 0,
      right: 0,
      left: 0,
      background: theme.palette.grey[100]
    }
  })
);

const Rows = () => {
  const classes = useStyles();

  const {
    loading,
    columns,
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

  const [currentItemCollapse, setCurrentItemCollapse] = React.useState<unknown | null>(null);

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

      if (currentItemCollapse && isEqual(currentItemCollapse, row?.data)) {
        callback(null);
        setCurrentItemCollapse(null);
        return;
      }

      callback(row?.data);
      setCurrentItemCollapse(row?.data);
    },
    [currentItemCollapse]
  );

  if (!loading && !rows?.length) {
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
};

export default React.memo(Rows);
