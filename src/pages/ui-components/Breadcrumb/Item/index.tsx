import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import { useBreadcrumb } from '../context';

export interface IBreadcrumbItemProps extends IStyledProp {
  isActive?: boolean;
  onClick?: () => void;
}

const SeparatorIcon = () => (
  <svg width='16' viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M88.1723 54.6884C85.8292 52.3453 82.0302 52.3453 79.687 54.6884C77.3439 57.0316 77.3439 60.8306 79.687 63.1737L112.513 96L79.688 128.824C77.3448 131.167 77.3448 134.966 79.6879 137.309C82.031 139.653 85.83 139.653 88.1731 137.31L125.241 100.243C126.366 99.1176 126.999 97.5914 126.999 96.0001C126.999 94.4088 126.367 92.8826 125.241 91.7574L88.1723 54.6884Z' />
  </svg>
);

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = props => {
  const { children, className, isActive } = props;
  const { separator } = useBreadcrumb();

  return (
    <li className={cx(className, isActive && '--active')}>
      <span className='__content' {...(isActive && { 'aria-current': 'page' })}>
        {children}
      </span>
      <span role='presentation' className='__separator'>
        {separator ?? <SeparatorIcon />}
      </span>
    </li>
  );
};

export default React.memo(styled(BreadcrumbItem, { label: 'houston-breadcrumb-item' })`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    .__content {
      display: flex;
      align-items: center;
    }

    &.--active {
      font-weight: ${theme.font.weight.semibold};
    }

    .__separator {
      display: flex;
      align-items: center;

      margin: 0 ${theme.spacing.inset.quarck};

      svg {
        fill: ${theme.neutralColor.low.light};
      }
    }
  `}
`);
