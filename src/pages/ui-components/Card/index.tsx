import styled, { cx, css, StyledProp, CSSInterpolation } from '@eduzz/houston-styles';
import type { Spacing as HoustonSpacing } from '@eduzz/houston-tokens';

type Spacing = Omit<HoustonSpacing, 'fn' | 'inline' | 'inset' | 'stack' | 'squish'>;

export type CardSpacing =
  | 'quarck'
  | 'nano'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'huge'
  | 'giant';

export interface CardProps {
  children?: React.ReactNode;
  disabled?: boolean;
  /**
   * @default `xs`
   */
  spacing?: CardSpacing;
}

const Card = ({
  children,
  spacing = 'xs',
  disabled,
  className,
  onClick,
  ...rest
}: CardProps & StyledProp & React.HTMLAttributes<HTMLDivElement>) => {
  const clickable = onClick !== undefined;

  return (
    <div
      className={cx(
        className,
        `--hst-spacing-${spacing}`,
        { '--hst-clickable': !disabled && clickable },
        { '--hst-disabled': disabled }
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default styled(Card, { label: 'hst-card' })`
  ${({ theme }) => {
    const modifiers: CSSInterpolation[] = [];

    const availableSpacing: Record<keyof Spacing, string> = {
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

    Object.entries(availableSpacing).forEach(([key, value]) =>
      modifiers.push(css`
        &.--hst-spacing-${key} {
          padding: ${value};
        }
      `)
    );

    return css`
      background-color: ${theme.neutralColor.high.pure};
      border: ${theme.border.width.xs} solid ${theme.hexToRgba(theme.brandColor.primary.pure, theme.opacity.level[3])};
      border-radius: ${theme.border.radius.sm};

      ${modifiers}

      &.--hst-disabled {
        cursor: not-allowed;
        opacity: ${theme.opacity.level[6]};
      }

      &.--hst-clickable {
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          box-shadow: ${theme.shadow.level[2]};
        }

        &:focus {
          outline: solid ${theme.border.width.sm} ${theme.feedbackColor.informative.pure};
        }
      }
    `;
  }}
`;
