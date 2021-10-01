import * as React from 'react';

import { GridSize } from '@mui/material/Grid';
import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';

import TableContext from '../context';
import { ITableSize } from '../interface';

let cellKeyIncremeter = 0;

export interface ITableCellProps {
  id?: string;
  className?: string;
  colSpan?: number;
  columnLabel?: string;
  mobileSize?: GridSize | true | false | 0;
  mobileAlign?: React.TdHTMLAttributes<HTMLTableDataCellElement>['align'];
  onClick?: () => void;
  onDoubleClick?: () => void;
  children?: React.ReactNode;
  align?: React.TdHTMLAttributes<HTMLTableDataCellElement>['align'];
}

const useStyles = createUseStyles(theme => ({
  root: ({ size }: { size: ITableSize }) => ({
    padding: size === 'small' ? '8px 12px' : '12px 20px',
    borderBottom: `1px solid ${theme.colors.grey[200]}`,
    fontSize: theme.textSize(size === 'small' ? 'small' : 'normal'),
    color: theme.colors.grey[600],
    fontWeight: theme.fontWeight('regular'),
    lineHeight: theme.lineHeight('normal')
  })
}));

const TableCell = React.memo<ITableCellProps>(
  ({ children, className, mobileSize, mobileAlign, columnLabel, onClick, onDoubleClick, align, ...props }) => {
    const [cellKey] = React.useState(() => `cell-${++cellKeyIncremeter}`);
    const cellRef = React.useRef<HTMLTableCellElement>();

    const label = useContextSelector(TableContext, context => context.rowMapLabel[cellKey]);
    const tableSize = useContextSelector(TableContext, context => context.size);

    const classes = useStyles({ size: tableSize });

    React.useEffect(() => {
      cellRef.current.setAttribute('cell-key', cellKey);
    }, [cellKey]);

    return (
      <td
        {...props}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        className={clsx(
          classes.root,
          className,
          `cell-size-${mobileSize ?? 'auto'}`,
          `cell-align-${align ?? 'left'}`,
          mobileAlign && `cell-mobile-align-${mobileAlign}`
        )}
        ref={cellRef}
      >
        <span className='table-label-mobile'>{columnLabel ?? label}</span>
        {children}
      </td>
    );
  }
);

export default TableCell;
