import styled, { cx, css, StyledProp, CSSInterpolation } from '@eduzz/houston-styles';
import type { Spacing as HoustonSpacing } from '@eduzz/houston-tokens';

type Spacing = Omit<HoustonSpacing, 'fn' | 'inline' | 'inset' | 'stack' | 'squish'>;

export type CardPadding = keyof Spacing;

export interface CardProps {
  children: React.ReactNode;
  disabled?: boolean;
  /**
   * @default `xs`
   */
  padding?: CardPadding;
}

const Card = ({
  children,
  padding = 'xs',
  disabled = false,
  className,
  onClick,
  ...rest
}: CardProps & StyledProp & React.HTMLAttributes<HTMLDivElement>) => {
  const clickable = onClick !== undefined;

  return (
    <div
      {...(clickable && { tabIndex: 0, role: 'button', onClick })}
      className={cx(
        className,
        `hst-card-padding-${padding}`,
        { 'hst-card-clickable': !disabled && clickable },
        { 'hst-card-disabled': disabled }
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * @deprecated Use Card from Antd
 * https://ant.design/components/card/
 */
export default styled(Card, { label: 'hst-card' })`
  ${({ theme }) => {
    const modifiers: CSSInterpolation[] = [];

    const availableSpacing: Record<CardPadding, string> = {
      quarck: theme.spacing.quarck,
      nano: theme.spacing.nano,
      xxxs: theme.spacing.xxxs,
      xxs: theme.spacing.xxs,
      xs: theme.spacing.xs,
      sm: theme.spacing.sm,
      md: theme.spacing.md,
      lg: theme.spacing.lg,
      xl: theme.spacing.xl,
      xxl: theme.spacing.xxl,
      xxxl: theme.spacing.xxxl,
      huge: theme.spacing.huge,
      giant: theme.spacing.giant
    };

    Object.entries(availableSpacing).forEach(([spacing, value]) =>
      modifiers.push(css`
        &.hst-card-padding-${spacing} {
          padding: ${value};
        }
      `)
    );

    return css`
      background-color: ${theme.neutralColor.high.pure};
      border: ${theme.border.width.xs} solid ${theme.hexToRgba(theme.brandColor.primary.pure, theme.opacity.level[3])};
      border-radius: ${theme.border.radius.sm};

      ${modifiers}

      &.hst-card-disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: ${theme.opacity.level[6]};
      }

      &.hst-card-clickable {
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          box-shadow: ${theme.shadow.level[2]};
        }

        &:active {
          background-color: ${theme.neutralColor.high.light};
          box-shadow: ${theme.shadow.level[1]};
        }

        &:focus {
          outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
        }
      }
    `;
  }}
`;
