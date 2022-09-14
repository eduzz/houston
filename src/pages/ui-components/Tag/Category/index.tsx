import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface TagCategoryProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  icon?: React.ReactNode;
}

const TagCategory = ({ children, icon, ...rest }: TagCategoryProps) => (
  <span {...rest}>
    {icon}
    {children}
  </span>
);

export default styled(TagCategory, { label: 'hst-tag-category' })(({ theme }) => {
  return css`
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.base};
    line-height: ${theme.line.height.default};
    color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[8])};
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.inline.nano};
  `;
});
