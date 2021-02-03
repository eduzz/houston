import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
  const { loading, columns, rows, actions, setAnchorEl, setOptions, setCurrentRow, messages } = useTableContext();

  const handleSetCurrentRow = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, data: unknown, options: ITableOptionProps[]) => {
      setCurrentRow(data);
      setAnchorEl(event.currentTarget);
      setOptions(options && options);
    },
    [setAnchorEl, setOptions, setCurrentRow]
  );

  if (!rows?.length) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align='center' colSpan={columns?.length + 1 || 1}>
            <div className={classes.loader}>{messages?.noData ? messages.noData : 'Nenhum registro encontrado.'}</div>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {loading && (
        <TableRow>
          <TableCell align='center' colSpan={columns?.length + 1 || 1}>
            <div className={classes.loader}>
              <CircularProgress />
            </div>
          </TableCell>
        </TableRow>
      )}

      {!loading &&
        rows.map((row, index) => (
          <TableRow hover key={`row-${index}`}>
            {row?.cells?.map((cell, i) => {
              const cellProps = { ...cell };
              delete cellProps.children;
              delete cellProps.truncate;

              return (
                <TableCell key={`cell-${i}`} {...cellProps}>
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
          </TableRow>
        ))}
    </TableBody>
  );
};

export default React.memo(Rows);
