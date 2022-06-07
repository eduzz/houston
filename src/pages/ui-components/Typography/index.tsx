import * as React from 'react';

import styled, { IHoustonTheme, clsx, css, IStyledProp } from '@eduzz/houston-styles';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import nestedComponent from '../utils/nestedComponent';
import warning from '../utils/warning';
import Caption from './Caption';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';

export type TypographyColors =
  | 'primary'
  | 'inherit'
  | 'neutralColor.low.pure'
  | 'neutralColor.low.light'
  | 'neutralColor.low.medium'
  | 'neutralColor.low.dark'
  | 'neutralColor.high.pure'
  | 'neutralColor.high.light'
  | 'neutralColor.high.medium'
  | 'neutralColor.high.dark';

const SupportedColors: TypographyColors[] = [
  'primary',
  'inherit',
  'neutralColor.low.pure',
  'neutralColor.low.light',
  'neutralColor.low.medium',
  'neutralColor.low.dark',
  'neutralColor.high.pure',
  'neutralColor.high.light',
  'neutralColor.high.medium',
  'neutralColor.high.dark'
];

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
}

const Typography = React.forwardRef<any, ITypographyProps>(({ as: Tag = 'p', className, ...props }, ref) => {
  const { size, lineHeight, weight, marginBottom, color, ...forwardProps } = props;
  return (
    <Tag
      ref={ref}
      className={clsx(className, {
        '--margin-bottom': marginBottom,
        [`--size-${size ?? 'xxs'}`]: true,
        [`--line-${lineHeight ?? 'md'}`]: true,
        [`--weight-${weight ?? 'regular'}`]: true,
        [`--color-${getColorName(color ?? 'neutralColor.low.pure')}`]: true
      })}
      {...forwardProps}
    />
  );
});

function getColorName(color: string) {
  return color.replace(/\./gim, '-');
}

function getColor(theme: IHoustonTheme, color: TypographyColors) {
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

const TypographyWrapper = styled(Typography)`
  ${({ theme }) => css`
    margin: 0;
    font-family: ${theme.font.family.base};
    -webkit-font-smoothing: auto;

    &.--margin-bottom {
      margin-bottom: ${theme.spacing.nano};
    }

    ${Object.keys(theme.font.size).map(
      size => css`
        &.--size-${size} {
          font-size: ${theme.font.size[size]};
        }
      `
    )}

    ${Object.keys(theme.line.height).map(
      lineHeight => css`
        &.--line-${lineHeight} {
          line-height: ${theme.line.height[lineHeight]};
        }
      `
    )}

    ${Object.keys(theme.font.weight).map(
      weight => css`
        &.--weight-${weight} {
          font-weight: ${theme.font.weight[weight]};
        }
      `
    )}

    ${SupportedColors.map(
      color => css`
        &.--color-${getColorName(color)} {
          color: ${getColor(theme, color)};
        }
      `
    )}
  `}
`;

export default nestedComponent(TypographyWrapper, {
  Caption,
  Heading,
  Paragraph,
  Subtitle
});
