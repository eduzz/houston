import * as React from 'react';

import { GridSize } from '@mui/material/Grid';
import { useContextSelector } from 'use-context-selector';

import { cx } from '@eduzz/houston-styles';
import styled, { IStyledProp } from '@eduzz/houston-styles/styled';

import TableContext from '../context';

let cellKeyIncremeter = 0;

export interface ITableCellProps extends IStyledProp {
  id?: string;
  className?: string;
  colSpan?: number;
  columnLabel?: string;
  mobileSize?: GridSize | true | false | 0;
  mobileAlign?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
  onClick?: () => void;
  onDoubleClick?: () => void;
  children?: React.ReactNode;
  align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
}

const TableCell = React.memo<ITableCellProps>(
  ({ children, className, mobileSize, mobileAlign, columnLabel, onClick, onDoubleClick, align, ...props }) => {
    const [cellKey] = React.useState(() => `cell-${++cellKeyIncremeter}`);
    const cellRef = React.useRef<HTMLTableCellElement>();

    const label = useContextSelector(TableContext, context => context.rowMapLabel[cellKey]);
    const tableSize = useContextSelector(TableContext, context => context.size);

    React.useEffect(() => {
      cellRef.current.setAttribute('cell-key', cellKey);
    }, [cellKey]);

    return (
      <td
        {...props}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        className={cx(
          className,
          tableSize === 'small' && '--small',
          className,
          `houston-cell-size-${mobileSize ?? 'auto'}`,
          `houston-cell-align-${align ?? 'left'}`,
          mobileAlign && `houston-cell-mobile-align-${mobileAlign}`
        )}
        ref={cellRef}
      >
        <span className='houston-table-label-mobile'>{columnLabel ?? label}</span>
        {children}
      </td>
    );
  }
);

export default styled(TableCell)`
  padding: 12px 20px;
  border-top: 1px solid ${({ theme }) => theme.neutralColor.high.light};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.neutralColor.low.light};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: ${({ theme }) => theme.line.height.md};

  & .--small {
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;
