import styled, { css, cx, HoustonThemeProps, StyledProp } from '@eduzz/houston-styles';

import warning from '../utils/warning';

export interface TagHighlightProps extends StyledProp, React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  color?: string;
  /**
   * Defaults to 'filled'
   */
  variant?: 'outlined' | 'filled';
}

const TagHighlight = ({ children, className, variant = 'filled', ...rest }: TagHighlightProps) => (
  <span className={cx(className, `--${variant}`)} {...rest}>
    {children}
  </span>
);

function getColor(theme: HoustonThemeProps, color: string) {
  if (!color) return;

  if (color === 'inherit') {
    return 'inherit';
  }

  if (color === 'primary') {
    return theme.brandColor.primary.pure;
  }

  const [themeColor, level, variable] = color.split('.');
  const result = theme[themeColor]?.[level]?.[variable];

  if (!result) {
    warning('Typography', `invalid color ${color}`);
  }

  return result;
}

const MAX_HEIGHT_IN_PX = 22;

export default styled(TagHighlight, { label: 'houston-tag-highlight' })(
  ({ theme, color = 'neutralColor.high.medium' }) => {
    const isDefaultColor = color === 'neutralColor.high.medium';

    return css`
      background-color: ${getColor(theme, color)};
      border-radius: ${theme.border.radius.pill};
      padding: ${theme.spacing.stack.quarck} ${theme.spacing.inline.xxxs};
      display: inline-flex;
      align-items: center;
      color: ${color === 'brandColor.primary.pure' ? theme.neutralColor.high.pure : theme.neutralColor.low.pure};
      line-height: ${theme.line.height.default};
      font-size: ${theme.font.size.xxs};
      font-weight: ${theme.font.weight.regular};
      font-family: ${theme.font.family.base};
      max-height: ${theme.pxToRem(MAX_HEIGHT_IN_PX)}rem;

      &.--outlined {
        border: ${theme.border.width.xs} solid;
        border-color: ${isDefaultColor ? theme.neutralColor.low.pure : getColor(theme, color)};
        color: ${isDefaultColor ? theme.neutralColor.low.pure : getColor(theme, color)};
        background-color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[0])};
      }
    `;
  }
);
