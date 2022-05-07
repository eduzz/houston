import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export interface IBreadcrumbItemProps extends IStyledProp {
  icon?: React.ReactNode;
  isActive?: boolean;
}

const BreadcrumbbItem: React.FC<IBreadcrumbItemProps> = props => {
  const { children, icon, className, isActive } = props;

  return (
    <div className={cx(className, isActive && '--active')}>
      {!!icon && <span className='__icon'>{icon}</span>}
      {!!React.Children.count(children) && <div className={cx('__text', isActive && '--active')}>{children}</div>}
    </div>
  );
};

const BreadcrumbItem = styled(BreadcrumbbItem, { label: 'houston-breadcrumbItem' })(({ theme }) => {
  return css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: ${theme.spacing.inset.quarck};

      & > .__text {
        font-family: ${theme.font.family.base};
        font-size: ${theme.font.size.xxs};
        line-height: ${theme.line.height.md};
        font-weight: ${theme.font.weight.regular};
        color: ${theme.neutralColor.low.pure};

        &.--active {
          font-weight: ${theme.font.weight.semibold};
        }
      }
  
      & > .__icon {
        color: ${theme.neutralColor.low.pure};
        margin: ${theme.spacing.inset.quarck};
      }

      & > .__icon ~ .__text {
        margin-left: 6px;
      }
    }
  `;
});

export default BreadcrumbItem;
