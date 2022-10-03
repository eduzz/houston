import ArrowRight from '@eduzz/houston-icons/ArrowRight';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export type LinkSizes = 'xs' | 'sm' | 'md' | 'inherit';

export interface LinkProps extends StyledProp, React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  /**
   * Redirect path.
   */
  href?: string;
  showIcon?: boolean;
  /**
   * Defaults to 'inherit'
   */
  size?: LinkSizes;
  children: React.ReactNode;
}
const Link = ({ as: Tag = 'a', className, showIcon, size = 'inherit', children, ...rest }: LinkProps) => (
  <Tag tabIndex={0} className={cx(className, `hst-link-size-${size}`)} {...rest}>
    {children}
    {showIcon && <ArrowRight size={size === 'md' ? 'md' : 'sm'} />}
  </Tag>
);

/**
 * @deprecated Use Typography.Link from Antd
 * https://ant.design/components/typography/#components-typography-demo-text
 */
export default styled(Link, { label: 'hst-link' })(({ theme }) => {
  return css`
    all: unset;
    line-height: ${theme.line.height.default};
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.regular};
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    gap: ${theme.spacing.inline.nano};
    border-radius: ${theme.border.radius.xs};
    cursor: pointer;

    &.hst-link-size-xs {
      font-size: ${theme.font.size.xxs};
    }

    &.hst-link-size-sm {
      font-size: ${theme.font.size.xs};
    }

    &.hst-link-size-md {
      font-size: ${theme.font.size.sm};
    }

    &.hst-link-size-inherit {
      font-size: inherit;
    }

    :not(:focus) {
      transition: 0.3s;
    }

    :hover {
      color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[7])};
    }

    :visited {
      color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[8])};
    }

    :focus {
      outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
      outline-offset: ${theme.spacing.inset.xxxs};
    }
  `;
});
