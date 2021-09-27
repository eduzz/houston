import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import TableContext from '../context';

export interface ITableCollapseColumn {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  width?: number;
  /**
   * Default `left`
   */
  align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
}

const useStyles = createUseStyles(theme => ({
  root: {
    padding: '0 12px 12px 12px',
    borderBottom: `1px solid ${theme.colors.grey[300]}`,
    fontSize: theme.textSize('small'),
    fontWeight: theme.fontWeight('semibold'),
    color: theme.colors.grey[500]
  }
}));

const TableCollapseColumn = React.memo<ITableCollapseColumn>(({ children, className, align, ...rest }) => {
  const classes = useStyles();

  const registerColumn = useContextSelector(TableContext, context => context.registerColumn);

  const cellRef = React.useRef<HTMLTableCellElement>();

  React.useEffect(() => {
    const unregister = registerColumn(true);
    return () => unregister();
  }, [registerColumn]);

  return (
    <th ref={cellRef} className={clsx(classes.root, className, `column-align-${align ?? 'left'}`)} {...rest}>
      {children}
    </th>
  );
});

export default TableCollapseColumn;
