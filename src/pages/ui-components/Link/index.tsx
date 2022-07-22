import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface LinkProps extends StyledProp, React.HTMLAttributes<HTMLElement> {
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
  <Tag tabIndex={0} {...(isExternalProp && { target: '_blank' })} {...rest}>
    {children}
  </Tag>
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
    padding: ${theme.spacing.inset.xxxs};
    cursor: pointer;

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
    }
  `;
});
