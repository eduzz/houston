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
      font-weight: ${theme.font.weight.regular};
      font-family: ${theme.font.family.base};
      line-height: ${theme.line.height.default};
      font-size: ${theme.font.size.xxxs};
      color: ${theme.neutralColor.low.pure};

      li:last-child .__separator {
        display: none;
      }
    }
  `}
`;

export default nestedComponent(React.memo(BreadcrumbWrapper), {
  Item,
  Link
});
