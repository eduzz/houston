import * as React from 'react';

import styled, { css, StyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import { BreadcrumbProvider } from './context';
import Item from './Item';
import Link from './Link';

export interface BreadcrumbProps extends StyledProp, React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  children: React.ReactNode;
}

const Breadcrumb = ({ children, className, separator, ...rest }: BreadcrumbProps) => {
  return (
    <BreadcrumbProvider separator={separator}>
      <nav aria-label='breadcrumb' className={className} {...rest}>
        <ol className='hst-breadcrumb-list'>{children}</ol>
      </nav>
    </BreadcrumbProvider>
  );
};

const BreadcrumbWrapper = styled(Breadcrumb, { label: 'hst-breadcrumb' })`
  ${({ theme }) => css`
    .hst-breadcrumb-list {
      display: flex;
      align-items: center;
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.xxxs};
      line-height: ${theme.line.height.lg};
      color: ${theme.neutralColor.low.pure};

      li:last-child .hst-breadcrumb-separator {
        display: none;
      }

      .hst-breadcrumb-separator {
        display: flex;
        align-items: center;
        margin: 0 ${theme.spacing.inset.xxxs};

        svg {
          width: ${theme.pxToRem(16)}rem;
          fill: ${theme.neutralColor.low.light};
        }
      }
    }
  `}
`;

/**
 * @deprecated Use Breadcrumb from Antd
 * https://ant.design/components/breadcrumb/
 */
export default nestedComponent(React.memo(BreadcrumbWrapper), {
  Item,
  Link
});
