import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles';

export interface IBreadcrumbItemProps extends IStyledProp {
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  /**
   * Redirect path.
   */
  to?: string;
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
}

const BreadcrumbbItem: React.FC<IBreadcrumbItemProps> = props => {
  const { children, icon, className, isActive, as: Component, to, ...rest } = props;

  return React.createElement(
    Component ?? 'div',
    { ...rest, to },
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
      padding: ${theme.spacing.inset.quarck};
      border-radius: ${theme.border.radius.xs};

      &:hover {
        background-color: ${theme.neutralColor.high.medium};
        text-decoration: underline;
      }

      &:focus {
        border: solid;
        border-width: ${theme.border.width.sm};
        border-color: ${theme.feedbackColor.informative.pure};
      }

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
      }

      & > .__icon ~ .__text {
        margin-left: ${theme.spacing.inset.quarck};
      }
    }
  `;
});

export default BreadcrumbItem;
