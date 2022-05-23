import * as React from 'react';

import styled, { css, cx, IStyledProp } from '@eduzz/houston-styles/styled';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import nestedComponent from '../utils/nestedComponent';
import Caption from './Caption';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';

type MountColorVariants<Obj, K extends keyof Obj & string = keyof Obj & string> = `${K}${Obj[K] extends object
  ? `.${MountColorVariants<Obj[K]>}`
  : ''}`;

type NeutralColor = Pick<HoustonTokens, 'neutralColor'>;

export type TypographyColors = 'primary' | MountColorVariants<NeutralColor>;

export type TypographyTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'strong'
  | 'article'
  | 'figcaption';

export interface ITypographyProps extends IStyledProp {
  id?: string;
  /**
   * Defaults to 'xxs'
   */
  size?: keyof HoustonTokens['font']['size'];
  /**
   * Defaults to 'md'
   */
  lineHeight?: keyof HoustonTokens['line']['height'];
  /**
   * Defaults to 'regular'
   */
  weight?: keyof HoustonTokens['font']['weight'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'neutralColor.low.pure'
   */
  color?: TypographyColors;
  /**
   * Defaults to 'p'
   */
  as?: TypographyTags;
  ['aria-label']?: string;
}

const Typography = React.forwardRef<any, ITypographyProps>(
  (
    {
      as: Tag = 'p',
      children,
      size = 'xxs',
      weight = 'regular',
      lineHeight = 'md',
      marginBottom,
      color = 'neutralColor.low.pure',
      className,
      ...props
    },
    ref
  ) => {
    const currentColor = color.replace(/[.]/g, '-');

    return (
      <Tag
        ref={ref}
        className={cx(
          className,
          `--size-${size}`,
          `--weight-${weight}`,
          `--line-height-${lineHeight}`,
          `--color-${currentColor}`,
          !!marginBottom && '--margin-bottom'
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

const TypographyWrapper = styled(Typography)`
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

      (['low', 'high'] as const).forEach(colorProp =>
        Object.entries(theme.neutralColor[colorProp]).forEach(([key, value]) =>
          modifiers.push(css`
            &.--color-neutralColor-${colorProp}-${key} {
              color: ${value};
            }
          `)
        )
      );

      return modifiers;
    }

    return css`
      margin: 0;

      ${mountFontModifiers(theme)}

      &.--color-primary {
        color: ${theme.brandColor.primary.pure};
      }

      &.--margin-bottom {
        margin-bottom: ${theme.spacing.nano};
      }
    `;
  }}
`;

export default nestedComponent(TypographyWrapper, {
  Caption,
  Heading,
  Paragraph,
  Subtitle
});
