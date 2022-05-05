import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export interface IBreadcrumbProps extends IStyledProp {
  icon?: React.ReactNode;
  isActive?: boolean;
}

const BreadcrumbbItem: React.FC<IBreadcrumbProps> = props => {
  const { children, icon, className } = props;

  return (
    <div className={cx(className)}>
      {!!icon && <span className='__icon'>{icon}</span>}
      {!!React.Children.count(children) && <div className='__text'>{children}</div>}
    </div>
  );
};

const BreadcrumbItem = styled(BreadcrumbbItem, { label: 'houston-breadcrumbItem' })(({ theme }) => {
  return css`
      display: flex;
      align-items: center;
      justify-content: center;

      & > .__icon ~ .__text {
        margin: 6px;
      }
    }
  `;
});

export default BreadcrumbItem;
