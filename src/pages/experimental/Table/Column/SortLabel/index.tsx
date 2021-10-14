import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import IconArrowUp from '@eduzz/houston-icons/ArrowUp';
import createUseStyles from '@eduzz/houston-ui/styles/createUseStyles';

import TableContext from '../../context';
import { ITableSize } from '../../interface';

interface ISortLabelProps {
  sortable?: boolean;
  active?: boolean;
  disabled?: boolean;
  direction?: 'asc' | 'desc';
  onClick?: () => void;
  children?: React.ReactNode;
}

const useStyles = createUseStyles(theme => ({
  root: ({ size }: { size: ITableSize }) => ({
    fontSize: theme.textSize(size === 'small' ? 'small' : 'normal'),
    fontWeight: theme.fontWeight('semibold'),
    color: theme.colors.grey[600],

    '&.--disabled': {
      color: theme.colors.grey[400],
      cursor: 'no-drop'
    },

    '&.--sortable': {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center'
    },

    '& .icon': {
      lineHeight: 0,
      transition: '0.2s linear',

      '&.--desc': {
        transform: 'rotate(-180deg)'
      }
    }
  })
}));

const SortLabel: React.FC<ISortLabelProps> = ({ children, sortable, active, direction, disabled, onClick }) => {
  const tableSize = useContextSelector(TableContext, context => context.size);

  const classes = useStyles({ size: tableSize });

  if (!sortable) {
    return <span className={clsx(classes.root)}>{children}</span>;
  }

  return (
    <div className={clsx(classes.root, disabled && '--disabled', '--sortable')} onClick={onClick}>
      {children}

      {active && (
        <div className={clsx(direction === 'desc' && '--desc', 'icon')}>
          <IconArrowUp />
        </div>
      )}
    </div>
  );
};

export default React.memo(SortLabel);
