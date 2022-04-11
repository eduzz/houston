import * as React from 'react';

import { cx } from '@emotion/css';
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

    '&.--collapse-content': {
      fontSize: theme.textSize('small'),
      color: theme.colors.grey[500]
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
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  const classes = useStyles();

  if (!sortable || isCollapseContent) {
    return (
      <span
        className={cx(
          classes.root,
          disabled && '--disabled',
          tableSize === 'small' && '--small',
          isCollapseContent && '--collapse-content'
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <div
      className={cx(classes.root, disabled && '--disabled', tableSize === 'small' && '--small', '--sortable')}
      onClick={onClick}
    >
      {children}

      {active && (
        <div className={cx(direction === 'desc' && '--desc', 'icon')}>
          <IconArrowUp />
        </div>
      )}
    </div>
  );
};

export default React.memo(SortLabel);
