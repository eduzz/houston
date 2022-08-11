import * as React from 'react';

import styled, { cx, css, StyledProp } from '@eduzz/houston-styles';

import TableContext, { TableContextProps, TableRow } from './context';

let rowKeyIncremeter = 0;

export interface TableProps extends StyledProp {
  id?: string;
  children: React.ReactNode;

  size?: 'sm' | 'md';
  minWidth?: number;
}

const Table = ({ size = 'md', id, children, className }: TableProps) => {
  const [rows, setRows] = React.useState<TableRow[]>([]);
  const registerRow = React.useCallback((row: Omit<TableRow, 'key'>) => {
    const key = `table-row-${++rowKeyIncremeter}`;
    setRows(rows => [...rows, { key, ...row }]);
    return () => setRows(rows => rows.filter(r => r.key !== key));
  }, []);

  const hasCollapseInRows = React.useMemo(() => rows?.some(r => r.hasCollapse), [rows]);
  const hasActionInRows = React.useMemo(() => rows?.some(r => r.hasActions), [rows]);

  const contextValue = React.useMemo<TableContextProps>(
    () => ({
      rows,
      registerRow,
      hasCollapseInRows,
      hasActionInRows
    }),
    [rows, registerRow, hasCollapseInRows, hasActionInRows]
  );

  return (
    <TableContext.Provider value={contextValue}>
      <table id={id} className={cx(className, `--hts-table-size-${size}`)}>
        {children}
      </table>
    </TableContext.Provider>
  );
};

export default styled(React.memo(Table), { label: 'houston-table' })(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    border-spacing: 0px;

    & > thead > tr > th.__hts-table-column {
      &:not([align]) {
        text-align: left;
      }

      & > .__hts-table-column-sort {
        font-weight: ${theme.font.weight.bold};
      }
    }

    & > tbody > tr > td.__hts-table-cell {
      font-weight: ${theme.font.weight.regular};
    }

    & > thead > tr > th.__hts-table-column,
    & > thead > tr > th.__hts-table-column > .__hts-table-column-sort,
    & > tbody > tr > td.__hts-table-cell,
    & > tbody > tr > td > .__hts-table-loading-text {
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.size.xxs};
      line-height: ${theme.line.height.xs};
      color: ${theme.neutralColor.low.dark};
    }

    & > thead > tr > th.__hts-table-column,
    & > tbody > tr > td.__hts-table-cell,
    & > tbody > tr > td.__hts-table-cell-action,
    & > tbody > tr > td.__hts-table-cell-collapse,
    & > tbody > tr > td > .__hts-table-loading-text {
      padding: ${theme.spacing.inset.xs};
      border-bottom: ${theme.border.width.xs} solid
        ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
    }

    & > tbody > tr > td.__hts-table-cell-action {
      padding: 0;
      text-align: right;

      & .__hts-table-cell-action-menu {
        display: flex;
        flex-direction: column;
      }

      & .__hts-table-cell-collapse-arrow {
        transition: 0.15s ease-out;

        &.--hts-active {
          transform: rotateX(180deg);
        }
      }
    }

    & > tbody > tr > td.__hts-table-cell-collapse {
      padding: 0;
      text-align: center;
    }

    & > thead > tr > th.--hts-hidden,
    & > thead > tr > td.--hts-hidden {
      display: none;
    }

    & > tbody > tr > td.__hts-table-collapse {
      transition: 0.3s;

      &:not(.--hts-no-background) {
        background-color: ${theme.neutralColor.high.light};
      }

      &.--hts-opened:not(.--hts-no-padding) {
        padding: ${theme.spacing.xxxs};
      }
    }
  `
);
