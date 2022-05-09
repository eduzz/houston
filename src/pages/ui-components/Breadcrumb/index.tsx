import * as React from 'react';

import IconChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { cx, IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../Helpers/nestedComponent';
import Item from './Item';

export interface IBreadcrumbProps extends IStyledProp {
  separator?: React.ReactNode;
}

const Breadcrumb: React.FC<IBreadcrumbProps> = props => {
  const { children, className, separator } = props;

  return (
    <div className={cx(className)}>
      {React.Children.toArray(children).map((child, index) => {
        const isLast = index === React.Children.count(children) - 1;
        return (
          <React.Fragment key={`breadcrumbItem-${index}`}>
            <>{child}</>
            {!isLast && <div className='__separator'>{separator ?? <IconChevronRight size={14} />}</div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const StyledBreadcrumb = styled(Breadcrumb, { label: 'houston-breadcrumb' })`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => theme.font.family.base};
  line-height: ${({ theme }) => theme.line.height.default};
  font-size: ${({ theme }) => theme.font.size.xxs};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .__separator {
    margin: ${({ theme }) => theme.spacing.inset.quarck};
    color: ${({ theme }) => theme.neutralColor.low.light};
  }
`;

export default nestedComponent(React.memo(StyledBreadcrumb), {
  Item
});
