import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import IconArrowUp from '@eduzz/houston-icons/ArrowUp';

import styled, { IStyledProp } from '../../../styles/styled';
import TableContext from '../../context';

interface ISortLabelProps extends IStyledProp {
  sortable?: boolean;
  active?: boolean;
  disabled?: boolean;
  direction?: 'asc' | 'desc';
  onClick?: () => void;
  children?: React.ReactNode;
}

const SortLabel: React.FC<ISortLabelProps> = ({
  children,
  sortable,
  active,
  direction,
  disabled,
  onClick,
  className
}) => {
  const tableSize = useContextSelector(TableContext, context => context.size);
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  if (!sortable || isCollapseContent) {
    return (
      <span
        className={cx(
          className,
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
      className={cx(className, disabled && '--disabled', tableSize === 'small' && '--small', '--sortable')}
      onClick={onClick}
    >
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
  font-size: ${({ theme }) => theme.textSize('normal')};
  font-weight: ${({ theme }) => theme.fontWeight('semibold')};
  color: ${({ theme }) => theme.colors.grey[600]};

  &.--small {
    font-size: ${({ theme }) => theme.textSize('small')};
  }

  &.--collapse-content {
    font-size: ${({ theme }) => theme.textSize('small')};
    color: ${({ theme }) => theme.colors.grey[500]};
  }

  &.--disabled {
    color: ${({ theme }) => theme.colors.grey[400]};
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
