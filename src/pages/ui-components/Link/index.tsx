import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface LinkProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
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
  isExternal?: boolean;
  children: React.ReactNode;
}

const Link = ({ as: Tag = 'a', isExternal: isExternalProp, children, ...rest }: LinkProps) => (
  <Tag {...rest}>{children}</Tag>
);

export default styled(Link, { label: 'houston-tag-link' })(({ theme }) => {
  return css`
    all: unset;
    line-height: ${theme.line.height.default};
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    gap: ${theme.spacing.inline.nano};
    border-radius: ${theme.border.radius.xs};
    cursor: pointer;

    a {
      all: unset;
      cursor: pointer;
    }
  `;
});
