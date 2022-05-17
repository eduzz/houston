import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles/styled';
import type { HoustonTokens } from '@eduzz/houston-tokens';

export type TypographyColors = 'low' | 'high' | 'primary';

export interface ITypographyProps extends IStyledProp {
  id?: string;
  size?: keyof HoustonTokens['font']['size'];
  lineHeight?: keyof HoustonTokens['line']['height'];
  weight?: keyof HoustonTokens['font']['weight'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'low'
   */
  color?: TypographyColors;
  /**
   * Defaults to 'p'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'article' | 'figcaption';
  ['aria-label']?: string;
}

const Typography = React.forwardRef<any, ITypographyProps>(
  (
    {
      as: Tag = 'p',
      children,
      size = 'xs',
      weight = 'regular',
      lineHeight = 'md',
      marginBottom,
      color = 'low',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Tag
        ref={ref}
        className={cx(
          className,
          `--size-${size}`,
          `--weight-${weight}`,
          `--line-height-${lineHeight}`,
          `--color-${color}`,
          !!marginBottom && '--margin-bottom'
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

export default styled(Typography)`
  ${({ theme }) => {
    function mountFontModifiers(theme: HoustonTokens) {
      const modifiers: any[] = [];
      (['size', 'weight'] as const).forEach(fontProp =>
        Object.entries(theme.font[fontProp]).forEach(([key, value]) =>
          modifiers.push(css`
            &.--${fontProp}-${key} {
              font-${fontProp}: ${value};
            }
          `)
        )
      );
      Object.entries(theme.line.height).forEach(([key, value]) =>
        modifiers.push(css`
          &.--line-height-${key} {
            line-height: ${value};
          }
        `)
      );
      return modifiers;
    }

    return css`
      margin: 0;

      ${mountFontModifiers(theme)}

      &.--color-high {
        color: ${theme.neutralColor.high.pure};
      }

      &.--color-low {
        color: ${theme.neutralColor.low.pure};
      }

      &.--color-primary {
        color: ${theme.brandColor.primary.pure};
      }

      &.--margin-bottom {
        margin-bottom: ${theme.spacing.nano};
      }
    `;
  }}
`;
