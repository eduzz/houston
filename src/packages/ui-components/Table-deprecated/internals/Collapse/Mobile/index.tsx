import * as React from 'react';

import CollapseMUI from '@material-ui/core/Collapse';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';

import ButtonIcon from '../../../../ButtonIcon';
import Row from '../../../../Grid/Row';
import CellMobile from '../../Cell/Mobile';
import MenuActions from '../../MenuActions';
import { useCollapse } from '../context';
import LoaderCollapse from './Loader';

const useStyles = makeStyles(theme =>
  createStyles({
    collapse: {
      background: theme.palette.grey[200],
      borderRadius: 4,
      width: '100%',
      transition: '0.15s linear',
      margin: '0 4px 0 4px',

      '&.--visibled': {
        margin: 4,
        padding: 4
      }
    },

    collapseRow: {},

    row: {
      display: 'flex',
      marginBottom: 4,
      flexDirection: 'row'
    },

    rowContent: {
      padding: 4,
      width: '100%',

      '&.--hasActions': {
        width: 'calc(100% - 40px)'
      }
    },

    rowExtra: {
      width: 40,
      display: 'flex',
      height: 'auto',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4px 0',

      '& button': {
        color: theme.palette.grey[500],
        padding: 2,
        width: 32
      }
    }
  })
);

const CollapseMobile = React.memo(() => {
  const classes = useStyles();

  const { row, collapse, handleSetCurrentRow, anchorEl, handleCloseActions, options, currentRow } = useCollapse();
  const { loading = false, actions = null, rows = [], columns = [] } = row?.collapse;

  const visibled = React.useMemo(() => !!(collapse && isEqual(collapse, row.data)), [collapse, row.data]);

  return (
    <>
      <div className={clsx(classes.collapse, visibled && '--visibled')}>
        <CollapseMUI in={visibled} timeout={350} unmountOnExit>
          {loading && <LoaderCollapse />}

          {!loading &&
            rows?.map((row, index) => (
              <div className={classes.row} key={`collapse-mobile-row-${index}`}>
                <Row
                  className={clsx(classes.rowContent, actions && '--hasActions')}
                  spacing='compact'
                  onClick={row?.onClick && row.onClick}
                  onDoubleClick={row?.onDoubleClick && row.onDoubleClick}
                >
                  {row?.cells?.map((cell, i) => (
                    <CellMobile key={`row-mobile-${index}-cell-${i}`} columns={columns} index={i} {...cell} />
                  ))}
                </Row>

                {actions && (
                  <div className={classes.rowExtra}>
                    <ButtonIcon size='small' onClick={e => handleSetCurrentRow(e, row)}>
                      <MoreHorizIcon />
                    </ButtonIcon>
                  </div>
                )}
              </div>
            ))}
        </CollapseMUI>
      </div>

      <MenuActions
        anchorEl={anchorEl}
        onClose={handleCloseActions}
        options={!options?.length ? actions?.options : options}
        currentRow={currentRow}
      />
    </>
  );
});

export default CollapseMobile;
