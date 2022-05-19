import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import { BreadcrumbProvider } from './context';
import Item from './Item';
import Link from './Link';

export interface IBreadcrumbProps extends IStyledProp {
  separator?: React.ReactNode;
  children: React.ReactNode;
}

const Breadcrumb = ({ children, className, separator }: IBreadcrumbProps) => {
  return (
    <BreadcrumbProvider separator={separator}>
      <nav aria-label='breadcrumb' className={className}>
        <ol className='__list'>{children}</ol>
      </nav>
    </BreadcrumbProvider>
  );
};

const BreadcrumbWrapper = styled(Breadcrumb, { label: 'houston-breadcrumb' })`
  ${({ theme }) => css`
    .__list {
      display: flex;
      align-items: center;
      font-family: ${theme.font.family.base};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.size.xxxs};
      line-height: ${theme.line.height.lg};
      color: ${theme.neutralColor.low.pure};

      li:last-child .__separator {
        display: none;
      }

      .__separator {
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

export default nestedComponent(React.memo(BreadcrumbWrapper), {
  Item,
  Link
});
