import * as React from 'react';

import { cx } from '@emotion/css';
import CircularProgress from '@mui/material/CircularProgress';
import { useContextSelector } from 'use-context-selector';

import useBoolean from '@eduzz/houston-hooks/useBoolean';
import IconChevronDown from '@eduzz/houston-icons/ChevronDown';
import IconDotsHorizontal from '@eduzz/houston-icons/DotsHorizontal';

import styled from '../../styles/styled';
import CollapseContent from '../CollapseContent';
import TableContext from '../context';
import { ITableAction, ITableCollapse } from '../interface';
import TableRowContext, { ITableRowContext } from './context';

let tableActionIncremeter = 0;

export interface ITableRowProps {
  id?: string;
  className?: string;
  data: unknown;
  index: number;
  children?: React.ReactNode;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

const TableRow = React.memo<ITableRowProps>(({ data, index, children, className, ...props }) => {
  const stripedRows = useContextSelector(TableContext, context => context.stripedRows);
  const onShowAction = useContextSelector(TableContext, context => context.onShowAction);
  const registerRow = useContextSelector(TableContext, context => context.registerRow);
  const tableSize = useContextSelector(TableContext, context => context.size);
  const hasCollapseInRows = useContextSelector(TableContext, context => context.hasCollapseInRows);
  const hasActionInRows = useContextSelector(TableContext, context => context.hasActionInRows);
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  const [showCollapse, toogleShowCollapse] = useBoolean(false);
  const [actionLoading, setActionLoading] = React.useState(false);

  const [collapse, setCollapse] = React.useState<ITableCollapse>(null);
  const [actions, setActions] = React.useState<ITableAction[]>([]);

  const oneAction = actions.length === 1 ? actions[0] : null;
  const hasActions = actions.length > 0;
  const hasCollapse = collapse !== null;

  const onClickAction = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (oneAction) {
        oneAction.onClick(data, index);
        return;
      }

      onShowAction({ anchorEl: e.currentTarget, rowData: data, rowIndex: index, actions });
    },
    [oneAction, onShowAction, data, index, actions]
  );

  const registerCollapse = React.useCallback((content: ITableCollapse) => {
    setCollapse(content);
    return () => setCollapse(null);
  }, []);

  const registerAction = React.useCallback((action: Omit<ITableAction, 'key'>) => {
    const key = `table-action-option-${++tableActionIncremeter}`;
    setActions(actions => [...actions, { key, ...action }]);
    return () => setActions(actions => actions.filter(o => o.key !== key));
  }, []);

  React.useEffect(() => {
    const unregister = registerRow({ hasActions, hasCollapse });
    return () => unregister();
  }, [hasActions, hasCollapse, registerRow]);

  const contextValue = React.useMemo<ITableRowContext>(
    () => ({ registerAction, registerCollapse, registerActionLoading: setActionLoading, data, index, collapse }),
    [collapse, data, index, registerAction, registerCollapse]
  );
  return (
    <TableRowContext.Provider value={contextValue}>
      <tr
        {...props}
        className={cx(
          hasActions && 'houston-table-row-has-action',
          !isCollapseContent && hasCollapse && 'houston-table-row-has-collapse',
          !isCollapseContent && stripedRows && (index % 2 == 0 ? 'houston-table-row-even' : 'table-row-odd'),
          className
        )}
      >
        {children}

        {hasActions && (
          <td
            align='right'
            className={cx('__houston-row-cell-action', tableSize === 'small' && '--small', 'houston-table-action-cell')}
          >
            {hasActions && !actionLoading && (
              <div onClick={onClickAction} className='__houston-table-icon-action'>
                {oneAction?.icon ?? <IconDotsHorizontal size={24} />}
              </div>
            )}
            {actionLoading && <CircularProgress size={18} variant='indeterminate' />}
          </td>
        )}

        {!hasActions && hasActionInRows && (
          <td
            className={cx(
              '__houston-table-cell-collapse',
              tableSize === 'small' && '--small',
              'houston-houston-table-collapse-cell'
            )}
          />
        )}

        {!isCollapseContent && hasCollapse && (
          <td
            align='right'
            className={cx(
              '__houston-table-cell-collapse',
              tableSize === 'small' && '--small',
              'houston-houston-table-collapse-cell'
            )}
          >
            <div
              onClick={toogleShowCollapse}
              className={cx(
                '__houston-table-icon-action',
                'houston-table-collapse-button',
                showCollapse && 'houston-table-collapse-button-opened'
              )}
            >
              <IconChevronDown size={24} />
            </div>
          </td>
        )}

        {!hasCollapse && hasCollapseInRows && (
          <td
            className={cx(
              '__houston-table-cell-collapse',
              tableSize === 'small' && '--small',
              'houston-houston-table-collapse-cell'
            )}
          />
        )}
      </tr>

      {!isCollapseContent && hasCollapse && <CollapseContent visible={showCollapse} />}
    </TableRowContext.Provider>
  );
});

export default styled(TableRow)`
  .__houston-table-cell-action {
    padding: 6px 12px;
    border-top: 1px solid ${({ theme }) => theme.colors.grey[200]}};
    font-size: ${({ theme }) => theme.textSize('normal')}px;

    &.--small {
      font-size: ${({ theme }) => theme.textSize('small')}px;
    }
  }

  .__houston-table-cell-collapse {
    padding-right: 8px;
    border-top: 1px solid  ${({ theme }) => theme.colors.grey[200]};
    font-size: ${({ theme }) => theme.textSize('normal')}px;

    &.--small {
      font-size: ${({ theme }) => theme.textSize('small')}px;
    }
  }

  .__houston-table-icon-action {
    display: inline-flex;
    padding: 4px;
    transition: background-color 0.2s linear;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey[200]};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.grey[300]};
    }

    & .houston-icon & svg {
      fill: ${({ theme }) => theme.colors.grey[600]};
    }
  }
`;
