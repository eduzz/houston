import * as React from 'react';

import clsx from 'clsx';
import { useContextSelector } from 'use-context-selector';

import IconArrowUp from '@eduzz/houston-icons/ArrowUp';

import createUseStyles from '../../../styles/createUseStyles';
import TableContext from '../../context';

interface ISortLabelProps {
  sortable?: boolean;
  active?: boolean;
  disabled?: boolean;
  direction?: 'asc' | 'desc';
  onClick?: () => void;
  children?: React.ReactNode;
}

const useStyles = createUseStyles(theme => ({
  root: {
    fontSize: theme.textSize('normal'),
    fontWeight: theme.fontWeight('semibold'),
    color: theme.colors.grey[600],

    '&.--small': {
      fontSize: theme.textSize('small')
    },

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
  }
}));

const SortLabel: React.FC<ISortLabelProps> = ({ children, sortable, active, direction, disabled, onClick }) => {
  const tableSize = useContextSelector(TableContext, context => context.size);

  const classes = useStyles();

  if (!sortable) {
    return (
      <span className={clsx(classes.root, disabled && '--disabled', tableSize === 'small' && '--small')}>
        {children}
      </span>
    );
  }

  return (
    <div
      className={clsx(classes.root, disabled && '--disabled', tableSize === 'small' && '--small', '--sortable')}
      onClick={onClick}
    >
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
