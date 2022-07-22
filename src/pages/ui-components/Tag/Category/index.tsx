import styled, { css, StyledProp } from '@eduzz/houston-styles';

export interface CategoryProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Category = ({ children, ...rest }: CategoryProps) => <span {...rest}>{children}</span>;

export default styled(Category, { label: 'houston-tag-category' })(({ theme }) => {
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
