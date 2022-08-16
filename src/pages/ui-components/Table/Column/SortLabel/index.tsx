import * as React from 'react';

import IconArrowUp from '@eduzz/houston-icons/ArrowUp';
import { cx } from '@eduzz/houston-styles';

interface SortLabelProps {
  sortable?: boolean;
  active?: boolean;
  disabled?: boolean;
  direction?: 'asc' | 'desc';
  onClick?: () => void;
  children?: React.ReactNode;
}

const SortLabel: React.FC<SortLabelProps> = ({ children, sortable, active, direction, disabled, onClick }) => {
  if (!sortable) {
    return <>{children}</>;
  }

  return (
    <div
      className={cx('hts-table__column-sort', { '--hts-sort-rev': direction === 'desc' })}
      onClick={disabled ? undefined : onClick}
    >
      {children}

      {active && <IconArrowUp className='hts-table__column-sort-icon' />}
    </div>
  );
};

export default SortLabel;
