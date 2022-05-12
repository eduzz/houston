import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import { IconWebBase } from '@eduzz/houston-icons/interfaces';
import IconBase from '@eduzz/houston-icons/utils/wrapperWeb';
import styled, { cx, IStyledProp } from '@eduzz/houston-styles';

import { BreadcrumbContext } from '../context';

export interface IBreadcrumbItemProps extends IStyledProp {
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const SeparatorIcon = React.memo<IconWebBase>(() => (
  <IconBase size={16}>
    <svg viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M88.1723 54.6884C85.8292 52.3453 82.0302 52.3453 79.687 54.6884C77.3439 57.0316 77.3439 60.8306 79.687 63.1737L112.513 96L79.688 128.824C77.3448 131.167 77.3448 134.966 79.6879 137.309C82.031 139.653 85.83 139.653 88.1731 137.31L125.241 100.243C126.366 99.1176 126.999 97.5914 126.999 96.0001C126.999 94.4088 126.367 92.8826 125.241 91.7574L88.1723 54.6884Z' />
    </svg>
  </IconBase>
));

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = props => {
  const { children, className, isActive, icon } = props;
  const separator = useContextSelector(BreadcrumbContext, context => context?.separator);

  return (
    <li className={cx(className, isActive && '--active')} {...(isActive && { 'aria-current': 'page' })}>
      {!!icon && <span className='__icon'>{icon}</span>}
      {children}
      <span role='presentation' className='__separator'>
        {separator ?? <SeparatorIcon />}
      </span>
    </li>
  );
};

export default React.memo(styled(BreadcrumbItem, { label: 'houston-breadcrumb-item' })`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    padding: ${({ theme }) => theme.spacing.inset.quarck};
    border-radius: ${({ theme }) => theme.border.radius.xs};
    transition: 0.5s background-color;

    :hover {
      background-color: ${({ theme }) => theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      text-decoration: underline;
    }

    :focus {
      outline-style: solid;
      outline-width: ${({ theme }) => theme.border.width.sm};
      outline-color: ${({ theme }) => theme.feedbackColor.informative.pure};
    }
  }

  .__text {
    font-family: ${({ theme }) => theme.font.family.base};
    font-size: ${({ theme }) => theme.font.size.xxs};
    line-height: ${({ theme }) => theme.line.height.md};
    color: ${({ theme }) => theme.neutralColor.low.pure};
  }

  &.--active {
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }

  .__icon {
    color: ${({ theme }) => theme.neutralColor.low.pure};
  }

  .__icon ~ .__text {
    margin-left: ${({ theme }) => theme.spacing.inset.quarck};
  }

  .__separator {
    margin: ${({ theme }) => theme.spacing.inset.quarck};

    svg {
      fill: ${({ theme }) => theme.neutralColor.low.light};
      width: 100%;
    }
  }
`);
