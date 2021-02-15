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

import { truncateText } from '../../../Helpers/functions';
import { useTableContext } from '../../context';
import { ITableOptionProps } from '../../Option';

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
    columns,
    rows,
    currentRow,
    actions,
    setAnchorEl,
    setOptions,
    setCurrentRow,
    messages,
    hasCollapseData
  } = useTableContext();

  const [collapse, setCollapse] = React.useState<unknown | null>(null);

  const countColumns = columns?.length + 1 + Number(hasCollapseData) || 1;

  const handleSetCurrentRow = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, data: unknown = null, options: ITableOptionProps[]) => {
      if (!data) {
        console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
      }

      setCurrentRow(data);
      setAnchorEl(event.currentTarget);
      setOptions(options && options);
    },
    [setAnchorEl, setOptions, setCurrentRow]
  );

  const handleClickCollapse = React.useCallback(
    (data: unknown = null) => {
      if (collapse && lodash.isEqual(collapse, data)) {
        setCollapse(null);
        return;
      }

      setCollapse(data);
    },
    [collapse]
  );

  if (!rows?.length) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align='center' colSpan={countColumns}>
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
          <TableCell align='center' colSpan={countColumns}>
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          </TableCell>
        </TableRow>
      )}

      {!loading &&
        rows.map((row, index) => (
          <TableRow hover key={`row-${index}`} selected={currentRow && lodash.isEqual(currentRow, row.data)}>
            {row?.cells?.map((cell, i) => {
              const cellProps = { ...cell };

              delete cellProps.children;
              delete cellProps.truncate;

              return (
                <TableCell key={`row-${index}-cell-${i}`} {...cellProps}>
                  {cell?.truncate && (
                    <span title={String(cell.children)}>{truncateText(String(cell.children), cell.truncate)}</span>
                  )}

                  {!cell?.truncate && cell.children}
                </TableCell>
              );
            })}

            {actions && (
              <TableCell align='right'>
                <div className={classes.buttonAction} onClick={e => handleSetCurrentRow(e, row?.data, row?.options)}>
                  <MoreHorizIcon />
                </div>
              </TableCell>
            )}

            {hasCollapseData && (
              <>
                {!row.collapse && <TableCell key={`row-${index}-collapse`} />}

                {row.collapse && (
                  <TableCell key={`row-${index}-collapse`}>
                    <IconButton size='small' onClick={() => handleClickCollapse(row.data)}>
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
        ))}
    </TableBody>
  );
};

export default React.memo(Rows);
