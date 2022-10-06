import * as React from 'react';

import IconArrowUp from '@eduzz/houston-icons/ArrowUp';
import { cx } from '@eduzz/houston-styles';

interface SortLabelProps {
  id?: string;
  sortable?: boolean;
  active?: boolean;
  disabled?: boolean;
  direction?: 'asc' | 'desc';
  onClick?: () => void;
  children?: React.ReactNode;
}

const SortLabel = ({ id, children, sortable, active, direction, disabled, onClick }: SortLabelProps) => {
  if (!sortable) {
    return <>{children}</>;
  }

  return (
    <div
      id={id}
      className={cx('hts-table-column-sort', { 'hts-table-column-sort-rev': direction === 'desc' })}
      onClick={disabled ? undefined : onClick}
    >
      {children}

      {active && <IconArrowUp className='hts-table-column-sort-icon' />}
    </div>
  );
};

/**
 * @deprecated Use Table from Antd
 * https://ant.design/components/table/
 */
export default SortLabel;
