import * as React from 'react';

import styled, { HoustonTheme, css, cx, StyledProp } from '@eduzz/houston-styles';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import nestedComponent from '../utils/nestedComponent';
import warning from '../utils/warning';
import Caption from './Caption';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Subtitle from './Subtitle';

type MountColorVariants<Obj, K extends keyof Obj & string = keyof Obj & string> = `${K}${Obj[K] extends object
  ? `.${MountColorVariants<Obj[K]>}`
  : ''}`;

type NeutralColor = Pick<HoustonTokens, 'neutralColor'>;

export type TypographyColors = 'primary' | 'inherit' | MountColorVariants<NeutralColor>;

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

export type TypographyMargin = keyof Omit<HoustonTokens['spacing'], 'fn' | 'squish' | 'inline' | 'stack' | 'inset'>;

const SUPPORTED_COLORS: TypographyColors[] = [
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

const SUPPORTED_MARGINS: TypographyMargin[] = [
  'quarck',
  'nano',
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'huge',
  'giant'
];

export interface TypographyProps extends StyledProp, React.HTMLAttributes<HTMLElement> {
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
  marginBottom?: boolean | TypographyMargin;
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

/**
 * @deprecated Use Typography from Antd
 * https://ant.design/components/typography/
 */
const Typography = React.forwardRef<any, TypographyProps>(({ as: Tag = 'p', className, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    size = 'xs',
    lineHeight = 'md',
    weight = 'regular',
    color = 'neutralColor.low.pure',
    marginBottom = false,
    ...forwardProps
  } = props;

  const margin: TypographyMargin | null = marginBottom === true ? 'nano' : marginBottom === false ? null : marginBottom;

  return (
    <Tag
      ref={ref}
      className={cx(className, {
        [`hst-typography-size-${size}`]: true,
        [`hst-typography-line-${lineHeight}`]: true,
        [`hst-typography-weight-${weight}`]: true,
        [`hst-typography-margin-${margin}`]: !!margin,
        [`hst-typography-color-${getColorName(color)}`]: true
      })}
      {...forwardProps}
    />
  );
});

function getColorName(color: string) {
  return color.replace(/\./gim, '-');
}

function getColor(theme: HoustonTheme, color: TypographyColors) {
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

const TypographyWrapper = styled(Typography, { label: 'hst-typography-typography' })(({ theme }) => {
  return css`
    margin: 0;

    ${Object.keys(theme.font.size).map(
      size => css`
        &.hst-typography-size-${size} {
          font-size: ${theme.font.size[size]};
        }
      `
    )}

    ${Object.keys(theme.line.height).map(
      lineHeight => css`
        &.hst-typography-line-${lineHeight} {
          line-height: ${theme.line.height[lineHeight]};
        }
      `
    )}

    ${Object.keys(theme.font.weight).map(
      weight => css`
        &.hst-typography-weight-${weight} {
          font-weight: ${theme.font.weight[weight]};
        }
      `
    )}

    ${SUPPORTED_COLORS.map(
      color => css`
        &.hst-typography-color-${getColorName(color)} {
          color: ${getColor(theme, color)};
        }
      `
    )}

    ${SUPPORTED_MARGINS.map(
      margin => css`
        &.hst-typography-margin-${margin} {
          margin-bottom: ${theme.spacing[margin]};
        }
      `
    )}
  `;
});

export default nestedComponent(TypographyWrapper, {
  Caption,
  Heading,
  Paragraph,
  Subtitle
});
