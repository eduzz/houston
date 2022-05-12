import * as React from 'react';

import styled, { css } from '@eduzz/houston-styles';

type BreadcrumbLinkProps = {
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  /**
   * Redirect path.
   */
  href?: string;
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const BreadcrumbLink = ({ as: Tag = 'a', icon, children, ...rest }: BreadcrumbLinkProps) => (
  <Tag {...rest}>
    {!!icon && <span className='__icon'>{icon}</span>}
    {!!children && <span className='__text'>{children}</span>}
  </Tag>
);

export default React.memo(styled(BreadcrumbLink, { label: 'houston-breadcrumb-link' })`
  ${({ theme, children, icon }) => {
    const hasOnlyIcon = icon && !children;
    return css`
      display: flex;
      align-items: center;

      min-height: 24px;
      min-width: 24px;
      border-radius: ${theme.border.radius.xs};
      padding: ${theme.spacing.inset.quarck};

      ${hasOnlyIcon &&
      css`
        justify-content: center;
      `}

      :hover {
        text-decoration: underline;
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[2])};
        transition: 0.5s background-color;
      }

      :focus {
        color: ${theme.neutralColor.low.pure};
        outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
      }

      :visited {
        color: ${theme.neutralColor.low.pure};
      }

      .__icon {
        line-height: 0;
        color: ${theme.neutralColor.low.pure};

        svg {
          fill: ${theme.neutralColor.low.pure};
        }
      }

      .__icon ~ .__text {
        margin-left: ${theme.spacing.inset.quarck};
      }

      .__text {
        line-height: ${theme.font.size.xxxs};
      }
    `;
  }}
`);
