import * as React from 'react';

import styled, { cx, css, StyledProp } from '@eduzz/houston-styles';

import TableContext, { TableContextProps, TableRow } from './context';

let rowKeyIncremeter = 0;

export interface TableProps extends StyledProp, React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;

  size?: 'sm' | 'md';
  minWidth?: number;
}

const Table = ({ size = 'md', children, className, minWidth, ...tableProps }: TableProps) => {
  const scroller = React.useRef<HTMLDivElement>(null);

  const [rows, setRows] = React.useState<TableRow[]>([]);
  const registerRow = React.useCallback((row: Omit<TableRow, 'key'>) => {
    const key = `table-row-${++rowKeyIncremeter}`;
    setRows(rows => [...rows, { key, ...row }]);
    return () => setRows(rows => rows.filter(r => r.key !== key));
  }, []);

  const hasCollapseInRows = React.useMemo(() => rows?.some(r => r.hasCollapse), [rows]);
  const hasActionInRows = React.useMemo(() => rows?.some(r => r.hasActions), [rows]);

  const contextValue = React.useMemo<TableContextProps>(
    () => ({ rows, registerRow, hasCollapseInRows, hasActionInRows }),
    [rows, registerRow, hasCollapseInRows, hasActionInRows]
  );

  React.useLayoutEffect(() => {
    let wait = false;
    let previousState = false;
    let timeout: ReturnType<typeof setTimeout>;
    const checkResize = () => {
      clearTimeout(timeout);

      if (wait) {
        setTimeout(() => checkResize(), 200);
        return;
      }

      wait = true;

      const hasScroll = (scroller.current?.scrollWidth ?? 0) > (scroller.current?.clientWidth ?? 0);
      const scrollLeft = scroller.current?.scrollLeft ?? 0;
      const totalScroll = (scroller.current?.scrollWidth ?? 0) - (scroller.current?.clientWidth ?? 0) - 10;
      const scrolledToEnd = scrollLeft >= totalScroll;

      const apply = hasScroll && !scrolledToEnd;

      if (apply !== previousState) {
        previousState = apply;
        apply
          ? scroller.current?.parentElement?.classList.add('--hts-scrollable')
          : scroller.current?.parentElement?.classList.remove('--hts-scrollable');
      }

      setTimeout(() => (wait = false), 200);
    };

    checkResize();
    window.addEventListener('resize', checkResize);
    scroller.current?.addEventListener('scroll', checkResize);

    return () => {
      window.removeEventListener('resize', checkResize);
    };
  }, []);

  return (
    <TableContext.Provider value={contextValue}>
      <div className={cx(className, `--hts-table-size-${size}`)}>
        <div className='__hts-table-scroller' ref={scroller}>
          <table {...tableProps} style={{ minWidth }}>
            {children}
          </table>
        </div>
      </div>
    </TableContext.Provider>
  );
};

export default styled(React.memo(Table), { label: 'houston-table' })(
  ({ theme }) => css`
    position: relative;
    overflow: hidden;

    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 1px;
      transition: 0.15s;
    }

    &.--hts-scrollable:before {
      box-shadow: ${theme.shadow.level[4]};
    }

    & > .__hts-table-scroller {
      overflow: auto;
    }

    & > .__hts-table-scroller > table {
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
    }
  `
);
