import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export interface TagHighlightProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  color: string;
  variant?: 'outlined' | 'filled';
}

const TagHighlight = ({ children, className, color, variant = 'filled', ...rest }: TagHighlightProps) => (
  <span className={cx(className, `--${variant}`)} {...rest}>
    {children}
  </span>
);

const MAX_HEIGHT_IN_PIX = 22;

export default styled(TagHighlight, { label: 'houston-tag-highlight' })(({ theme }) => {
  return css`
    background-color: ${theme.neutralColor.high.medium};
    border-radius: ${theme.border.radius.pill};
    padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.xxxs};
    display: inline-flex;
    align-items: center;
    font-size: ${theme.font.size.xxs};
    line-height: ${theme.line.height.default};
    max-height: ${theme.pxToRem(MAX_HEIGHT_IN_PIX)}rem;

    &.--outlined {
      border: ${theme.border.width.xs} solid;
      border-color: ${theme.neutralColor.low.pure};
      background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
    }
  `;
});
