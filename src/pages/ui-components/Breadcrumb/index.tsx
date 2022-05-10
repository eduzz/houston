import * as React from 'react';

import styled, { IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../Helpers/nestedComponent';
import Item from './Item';

export interface IBreadcrumbProps extends IStyledProp {
  separator?: React.ReactNode;
}

const Breadcrumb: React.FC<IBreadcrumbProps> = props => {
  const { children, className } = props;

  return (
    <nav aria-label='breadcrumb' className={className}>
      <ol className='__list'>{children}</ol>
    </nav>
  );
};

const StyledBreadcrumb = styled(Breadcrumb, { label: 'houston-breadcrumb' })`
  .__list {
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-family: ${({ theme }) => theme.font.family.base};
    line-height: ${({ theme }) => theme.line.height.default};
    font-size: ${({ theme }) => theme.font.size.xxs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  li:last-child .__separator {
    display: none;
  }
`;

export default nestedComponent(React.memo(StyledBreadcrumb), {
  Item
});
