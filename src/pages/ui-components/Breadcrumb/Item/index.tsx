import * as React from 'react';

import IconChevronRight from '@eduzz/houston-icons/ChevronRight';
import styled, { cx, IStyledProp } from '@eduzz/houston-styles';

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

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = props => {
  const { children, icon, className, isActive, as: Tag = 'a', to, ...rest } = props;

  return (
    <li className={cx(className, isActive && '--active')} {...(isActive && { 'aria-current': 'page' })}>
      <Tag to={to} {...rest}>
        {!!icon && <span className='__icon'>{icon}</span>}
        {!!React.Children.count(children) && <span className='__text'>{children}</span>}
      </Tag>
      <span role='presentation' className='__separator'>
        {<IconChevronRight size={14} />}
      </span>
    </li>
  );
};

export default styled(BreadcrumbItem, { label: 'houston-breadcrumb-item' })`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.inset.quarck};
    border-radius: ${({ theme }) => theme.border.radius.xs};
    transition: 0.3s;

    :hover {
      background: ${({ theme }) => theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
      text-decoration: underline;
    }
  }

  .__text {
    font-family: ${({ theme }) => theme.font.family.base};
    font-size: ${({ theme }) => theme.font.size.xxs};
    line-height: ${({ theme }) => theme.line.height.md};
    color: ${({ theme }) => theme.neutralColor.low.pure};
  }

  &.--active {
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }

  &:focus {
    border: solid;
    border-width: ${({ theme }) => theme.border.width.sm};
    border-color: ${({ theme }) => theme.feedbackColor.informative.pure};
  }

  .__icon {
    color: ${({ theme }) => theme.neutralColor.low.pure};
  }

  .__icon ~ .__text {
    margin-left: ${({ theme }) => theme.spacing.inset.quarck};
  }

  .__separator {
    margin: ${({ theme }) => theme.spacing.inset.quarck};
    color: ${({ theme }) => theme.neutralColor.low.light};
  }
`;
