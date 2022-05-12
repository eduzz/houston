import * as React from 'react';

type IBreadcrumbLinkProps = {
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
  children?: React.ReactNode;
};

const BreadcrumbLink = ({ as: Tag = 'a', to, icon, children, ...rest }: IBreadcrumbLinkProps) => (
  <Tag to={to} {...rest} tabIndex={0}>
    {!!icon && <span className='__icon'>{icon}</span>}
    {!!React.Children.count(children) && <span className='__text'>{children}</span>}
  </Tag>
);

export default React.memo(BreadcrumbLink);
