import * as React from 'react';

import styled, { css } from '@eduzz/houston-styles';
import Tooltip from '@eduzz/houston-ui/Tooltip';

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
    {!!children && typeof children === 'string' && children.length > 32 ? (
      <Tooltip placement='bottom' title={children}>
        <span className='__text'>{children.slice(0, 32) + ' ...'}</span>
      </Tooltip>
    ) : (
      <>{!!children && <span className='__text'>{children}</span>}</>
    )}
  </Tag>
);

export default React.memo(styled(BreadcrumbLink, { label: 'houston-breadcrumb-link' })`
  ${({ theme, children, icon }) => {
    const hasOnlyIcon = icon && !children;

    return css`
      display: flex;
      align-items: center;
      min-height: ${theme.pxToRem('24px')};
      min-width: ${theme.pxToRem('24px')};
      border-radius: ${theme.border.radius.xs};
      padding: ${theme.spacing.inset.xxxs};

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
        max-height: ${theme.pxToRem('16px')};
        max-width: ${theme.pxToRem('16px')};

        svg {
          fill: ${theme.neutralColor.low.pure};
          max-height: ${theme.pxToRem('16px')};
          max-width: ${theme.pxToRem('16px')};
        }
      }

      .__icon ~ .__text {
        margin-left: ${theme.spacing.inset.xxxs};
      }

      .__text {
        line-height: ${theme.font.size.xxxs};
      }
    `;
  }}
`);
