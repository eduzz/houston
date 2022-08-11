import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import IconArrowUp from '@eduzz/houston-icons/ArrowUp';
import { cx } from '@eduzz/houston-styles';
import styled, { StyledProp } from '@eduzz/houston-styles/styled';

import TableContext from '../../context';

interface SortLabelProps extends StyledProp {
  sortable?: boolean;
  active?: boolean;
  disabled?: boolean;
  direction?: 'asc' | 'desc';
  onClick?: () => void;
  children?: React.ReactNode;
}

const SortLabel: React.FC<SortLabelProps> = ({
  children,
  sortable,
  active,
  direction,
  disabled,
  onClick,
  className
}) => {
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  if (!sortable || isCollapseContent) {
    return (
      <span
        className={cx(
          className,
          '__hts-table-column-sort',
          disabled && '--disabled',
          isCollapseContent && '--collapse-content'
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <div className={cx(className, '__hts-table-column-sort', disabled && '--disabled', '--sortable')} onClick={onClick}>
      {children}

      {active && (
        <div className={cx(direction === 'desc' && '--desc', '__icon')}>
          <IconArrowUp />
        </div>
      )}
    </div>
  );
};

export default styled(SortLabel)`
  &.--small {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }

  &.--collapse-content {
    font-size: ${({ theme }) => theme.font.size.xxs};
    color: ${({ theme }) => theme.neutralColor.low.dark};
  }

  &.--disabled {
    color: ${({ theme }) => theme.neutralColor.low.light};
    cursor: no-drop;
  }

  &.--sortable {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  & > .__icon {
    line-height: 0;
    transition: 0.2s linear;

    &.--desc {
      transform: rotate(-180deg);
    }
  }
`;
