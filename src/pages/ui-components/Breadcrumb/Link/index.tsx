import * as React from 'react';

import styled, { css } from '@eduzz/houston-styles';

import { useBreadcrumb } from '../context';
import LongTextToolTip from '../internals/LongTextToolTip';

type BreadcrumbLinkProps = {
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  /**
   * Redirect path.
   */
  href?: string;
  id?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const SeparatorIcon = () => (
  <svg viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M88.1723 54.6884C85.8292 52.3453 82.0302 52.3453 79.687 54.6884C77.3439 57.0316 77.3439 60.8306 79.687 63.1737L112.513 96L79.688 128.824C77.3448 131.167 77.3448 134.966 79.6879 137.309C82.031 139.653 85.83 139.653 88.1731 137.31L125.241 100.243C126.366 99.1176 126.999 97.5914 126.999 96.0001C126.999 94.4088 126.367 92.8826 125.241 91.7574L88.1723 54.6884Z' />
  </svg>
);

const BreadcrumbLink = ({ as: Tag = 'a', icon, children, className, ...rest }: BreadcrumbLinkProps) => {
  const { separator } = useBreadcrumb();

  return (
    <li className={className}>
      <Tag {...rest} className='hst-breadcrumb-link-tag'>
        {!!icon && <span className='hst-breadcrumb-link-icon'>{icon}</span>}
        {!!children && <LongTextToolTip>{children}</LongTextToolTip>}
      </Tag>

      <span role='presentation' className='hst-breadcrumb-separator'>
        {separator ?? <SeparatorIcon />}
      </span>
    </li>
  );
};

export default React.memo(styled(BreadcrumbLink, { label: 'hst-breadcrumb-link' })`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    .hst-breadcrumb-link-tag {
      display: flex;
      align-items: center;
      border-radius: ${theme.border.radius.xs};
      padding: ${theme.spacing.inset.xxxs};

      :hover {
        text-decoration: underline;
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        transition: 0.5s background-color;
      }

      :focus {
        color: ${theme.neutralColor.low.pure};
        outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
      }
    }

    a {
      all: unset;
      cursor: pointer;
    }

    :visited {
      color: ${theme.neutralColor.low.pure};
    }

    .hst-breadcrumb-link-icon {
      line-height: 0;
      color: ${theme.neutralColor.low.pure};
      max-height: ${theme.pxToRem(16)}rem;
      max-width: ${theme.pxToRem(16)}rem;

      svg {
        fill: ${theme.neutralColor.low.pure};
        max-height: ${theme.pxToRem(16)}rem;
        max-width: ${theme.pxToRem(16)}rem;
      }
    }

    .hst-breadcrumb-link-icon ~ .hst-breadcrumb-text {
      margin-left: ${theme.spacing.inset.xxxs};
    }
  `}
`);
