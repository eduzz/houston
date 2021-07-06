import * as React from 'react';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import clsx from 'clsx';
// @ts-ignore
import isEqual from 'lodash/isEqual';

import ButtonIcon from '../../../../ButtonIcon';
import Row from '../../../../Grid/Row';
import createUseStyles from '../../../../styles/createUseStyles';
import { useTableContext } from '../../../context';
import { IRowProps } from '../../../interfaces';
import CellMobile from '../../Cell/Mobile';
import Collapse from '../../Collapse';
import RowsMobileEmpty from './Empty';
import RowMobileLoader from './Loader';

const useStyles = createUseStyles(theme => ({
  row: {
    background: theme.colors.grey[100],
    boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    display: 'flex',
    marginBottom: 8,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  rowContent: {
    padding: 12,
    width: '100%',

    '&.--hasActions': {
      width: 'calc(100% - 40px)',
      borderRight: `1px solid ${theme.colors.grey[200]}`
    },

    '&.--hasCollapse': {
      borderBottom: `1px solid ${theme.colors.grey[200]}`
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

    '&.--hasCollapse': {
      justifyContent: 'space-between',
      borderBottom: `1px solid ${theme.colors.grey[200]}`
    },

    '& button': {
      color: theme.colors.grey[600],
      padding: 2,
      width: 32
    }
  }
}));

const RowsMobile = React.memo<IRowProps>(
  ({ currentItemCollapse, handleSetCurrentRow, handleClickCollapse, handleClickActions }) => {
    const classes = useStyles();

    const { loading, rows, actions, hasCollapseData, hasColumnAction } = useTableContext();

    const hasActions = React.useMemo(() => actions || hasColumnAction, [actions, hasColumnAction]);

    if (!loading && !rows?.length) {
      return <RowsMobileEmpty />;
    }

    return (
      <>
        {loading && <RowMobileLoader />}

        {!loading &&
          rows?.map((row, index) => {
            const hasCollapse = hasCollapseData && row?.collapse;
            const { data = null, cells = [], collapse = null, className } = row;

            const rowProps = {
              id: row?.id,
              tabIndex: row?.tabIndex,
              onClick: row?.onClick,
              onDoubleClick: row?.onDoubleClick
            };

            return (
              <React.Fragment key={`table-row-mobile-${index}`}>
                <div className={classes.row}>
                  <Row
                    spacing='compact'
                    className={clsx(
                      classes.rowContent,
                      hasActions && '--hasActions',
                      hasCollapse && '--hasCollapse',
                      className
                    )}
                    {...rowProps}
                  >
                    {cells?.map((cell, i) => (
                      <CellMobile key={`row-mobile-${index}-cell-${i}`} index={i} {...cell} />
                    ))}
                  </Row>

                  {hasActions && (
                    <div className={clsx(classes.rowExtra, hasCollapse && '--hasCollapse')}>
                      {hasCollapse && (
                        <ButtonIcon size='small' onClick={() => handleClickCollapse(row)}>
                          {currentItemCollapse && isEqual(currentItemCollapse, data) ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </ButtonIcon>
                      )}

                      {hasColumnAction && (
                        <ButtonIcon size='small' onClick={e => handleClickActions(e, data)}>
                          <MoreHorizIcon />
                        </ButtonIcon>
                      )}

                      {actions && (
                        <ButtonIcon size='small' onClick={e => handleSetCurrentRow(e, row)}>
                          <MoreHorizIcon />
                        </ButtonIcon>
                      )}
                    </div>
                  )}

                  {collapse && <Collapse collapse={currentItemCollapse} row={row} />}
                </div>
              </React.Fragment>
            );
          })}
      </>
    );
  }
);

export default RowsMobile;
