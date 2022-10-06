import styled, { css, CSSInterpolation, cx, StyledProp } from '@eduzz/houston-styles';

export type BadgeColors = 'positive' | 'negative' | 'informative' | 'warning';

export type BadgeDistance = 'xs' | 'sm' | 'md';

export interface BadgeProps {
  count?: number;
  /**
   * @default `negative`
   */
  color?: BadgeColors;
  /**
   * Hide number and display a small ball?
   * @default `false`
   */
  dot?: boolean;
  /**
   * Distance from element
   * @default `md`
   */
  offset?: BadgeDistance;
}

const MIN_WITH_DOT = 8;
const MIN_WITH_NUMBER = 20;
const MAX_COUNT = 99;
const Badge = ({
  count,
  className,
  color = 'negative',
  offset = 'md',
  dot = false,
  children,
  ...rest
}: BadgeProps & React.HTMLAttributes<HTMLSpanElement> & StyledProp) => {
  const hasCount = count !== undefined;
  const displayCount = hasCount && count > MAX_COUNT ? `${MAX_COUNT}+` : count;
  const hasChildren = children !== undefined;

  return (
    <span
      {...rest}
      className={cx(
        className,
        `hst-badge-color-${color}`,
        `hst-badge-offset-${offset}`,
        { 'hst-badge-has-not-children': !hasChildren },
        { 'hst-badge-dot': dot || !hasCount },
        { 'hst-badge-number': hasCount && !dot }
      )}
    >
      <sup className='hst-badge-count'>{!dot && displayCount}</sup>
      {children}
    </span>
  );
};

const BadgeWrapper = styled(Badge, { label: 'hst-badge' })`
  ${({ theme }) => {
    const modifiers: CSSInterpolation[] = [];

    Object.keys(theme.feedbackColor).forEach(key => {
      if (key === 'warning') {
        return modifiers.push(css`
          &.hst-badge-color-warning {
            & > .hst-badge-count {
              background-color: ${theme.feedbackColor[key].dark};
            }
          }
        `);
      }

      return modifiers.push(css`
        &.hst-badge-color-${key} {
          & > .hst-badge-count {
            background-color: ${theme.feedbackColor[key].pure};
          }
        }
      `);
    });

    return css`
      position: relative;
      display: inline-flex;
      line-height: 1;
      vertical-align: middle;

      ${modifiers}

      &.hst-badge-dot {
        & > .hst-badge-count {
          min-width: ${theme.pxToRem(MIN_WITH_DOT)}rem;
          height: ${theme.pxToRem(MIN_WITH_DOT)}rem;
          padding: 0;
        }
      }

      &.hst-badge-number {
        & > .hst-badge-count {
          min-width: ${theme.pxToRem(MIN_WITH_NUMBER)}rem;
          min-height: ${theme.pxToRem(MIN_WITH_NUMBER)}rem;
        }
      }

      &.hst-badge-offset-xs {
        & > .hst-badge-count {
          transform: translate(30%, -30%);
        }
      }

      &.hst-badge-offset-sm {
        & > .hst-badge-count {
          transform: translate(40%, -40%);
        }
      }

      &.hst-badge-offset-md {
        & > .hst-badge-count {
          transform: translate(50%, -50%);
        }
      }

      &.hst-badge-has-not-children {
        & > .hst-badge-count {
          position: relative;
          transform: none;
        }
      }

      & > .hst-badge-count {
        position: absolute;
        display: inline-flex;
        top: 0;
        right: 0;
        z-index: 2;
        transform-origin: 100% 0%;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
        transition: all 300ms;
        font-size: ${theme.font.size.xxxs};
        padding: 0 ${theme.spacing.inset.xxxs};
        color: ${theme.neutralColor.high.pure};
        font-weight: ${theme.font.weight.regular};
        border-radius: ${theme.border.radius.pill};
        border: ${theme.border.width.xs} solid ${theme.neutralColor.high.pure};
      }
    `;
  }}
`;

/**
 * @deprecated Use Badge from Antd
 * https://ant.design/components/badge/
 */
export default BadgeWrapper;
