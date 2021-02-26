import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import CollapseMUI from '@material-ui/core/Collapse';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// @ts-ignore
import isEqual from 'lodash/isEqual';

import { useTableContext } from '../../context';
import { ITableRow } from '../../interfaces';
import { ITableOptionProps } from '../../Option';
import Cell from '../Cell';
import MenuActions from '../MenuActions';

const useStyles = makeStyles(theme =>
  createStyles({
    loader: {
      padding: 16
    },

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

    buttonAction: {
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

interface IProps {
  collapse: unknown;
  row: ITableRow;
}

const Collapse: React.FC<IProps> = ({ collapse, row }) => {
  const classes = useStyles();
  const { numberColumns } = useTableContext();

  const [options, setOptions] = React.useState<ITableOptionProps[]>([]);
  const [currentRow, setCurrentRow] = React.useState<ITableRow>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleSetCurrentRow = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, row: ITableRow = null) => {
      if (!row.data) {
        console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
      }

      setCurrentRow(row);
      setAnchorEl(event.currentTarget);
      setOptions(row?.options);
    },
    [setAnchorEl]
  );

  const handleCloseActions = React.useCallback(() => {
    setAnchorEl(null);

    setTimeout(() => {
      setOptions([]);
      setCurrentRow(null);
    }, 180);
  }, [setAnchorEl]);

  if (!row?.collapse) {
    return null;
  }

  const { loading = false, columns = [], actions = null, type = 'table', rows } = row?.collapse;
  const numberColumnsCollapse = columns?.length + 1 + Number(!!actions) || 1;

  return (
    <>
      <TableRow className={classes.rowCollapse}>
        <TableCell colSpan={numberColumns} className={classes.cellCollapse}>
          <CollapseMUI in={collapse && isEqual(collapse, row.data)} timeout={500} unmountOnExit>
            <Table size='small'>
              <>
                {!loading && type === 'table' && (
                  <TableHead>
                    <TableRow>
                      {columns?.map(column => {
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
                  {loading && (
                    <TableRow>
                      <TableCell
                        align='center'
                        classes={{ root: type === 'list' && classes.list }}
                        colSpan={numberColumnsCollapse}
                      >
                        <div className={classes.loader}>
                          <CircularProgress size='2rem' />
                        </div>
                      </TableCell>
                    </TableRow>
                  )}

                  {!loading &&
                    rows?.map((r, index) => (
                      <TableRow key={`collapse-row-${index}`}>
                        {r?.cells?.map((cell, i) => (
                          <Cell key={`collapse-row-${index}-cell-${i}`} list={type === 'list'} {...cell} />
                        ))}

                        {actions && (
                          <TableCell align='right' classes={{ root: type === 'list' && classes.list }}>
                            <div className={classes.buttonAction} onClick={e => handleSetCurrentRow(e, r)}>
                              <MoreHorizIcon />
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </>
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
};

export default React.memo(Collapse);
