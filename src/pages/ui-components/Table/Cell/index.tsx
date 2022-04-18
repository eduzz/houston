import * as React from 'react';

import { cx } from '@emotion/css';
import { GridSize } from '@mui/material/Grid';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import TableContext from '../context';

let cellKeyIncremeter = 0;

export interface ITableCellProps {
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

const useStyles = createUseStyles(theme => ({
  root: {
    padding: '12px 20px',
    borderTop: `1px solid ${theme.colors.grey[200]}`,
    fontSize: theme.textSize('normal'),
    color: theme.colors.grey[600],
    fontWeight: theme.fontWeight('regular'),
    lineHeight: theme.lineHeight('normal')
  },

  rootSmall: {
    padding: '8px 12px',
    fontSize: theme.textSize('small')
  }
}));

const TableCell = React.memo<ITableCellProps>(
  ({ children, className, mobileSize, mobileAlign, columnLabel, onClick, onDoubleClick, align, ...props }) => {
    const classes = useStyles();

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
          classes.root,
          tableSize === 'small' && classes.rootSmall,
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

export default TableCell;
