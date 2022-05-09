import * as React from 'react';

import IconChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../Helpers/nestedComponent';
import Item from './Item';

export interface IBreadcrumbProps extends IStyledProp {
  separator?: React.ReactNode;
}

const Breadcrumb: React.FC<IBreadcrumbProps> = props => {
  const { children, className, separator } = props;

  return (
    <div className={cx(className)}>
      {React.Children.toArray(children)
        .slice(0, -1)
        .map((child, index) => (
          <React.Fragment key={`breadcrumbItem-${index}`}>
            <>{child}</>
            <div className='__separator'>{separator ?? <IconChevronRight size={14} />}</div>
          </React.Fragment>
        ))}
      {children[React.Children.count(children) - 1]}
    </div>
  );
};

const StyledBreadcrumb = styled(Breadcrumb, { label: 'houston-breadcrumb' })(({ theme }) => {
  return css`
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.base};
    line-height: ${theme.line.height.default};
    font-size: ${theme.font.size.xxs};
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & > .__separator {
      margin: ${theme.spacing.inset.quarck};
      color: ${theme.neutralColor.low.light};
    }
  `;
});

export default nestedComponent(React.memo(StyledBreadcrumb), {
  Item
});
