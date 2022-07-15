import * as React from 'react';

import { IHoustonTheme } from '@eduzz/houston-styles';
import styled, { css, IStyledProp } from '@eduzz/houston-styles/styled';
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

export interface ITypographyProps extends IStyledProp, React.HTMLAttributes<HTMLElement> {
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

const Typography = React.forwardRef<any, ITypographyProps>(({ as: Tag = 'p', className, ...props }, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size, lineHeight, weight, marginBottom, color, ...forwardProps } = props;
  return <Tag ref={ref} className={className} {...forwardProps} />;
});

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
  ${({ theme, size = 'xs', lineHeight = 'md', weight = 'regular', color = 'neutralColor.low.pure', marginBottom }) => {
    return css`
      margin: 0;
      font-size: ${theme.font.size[size]};
      font-weight: ${theme.font.weight[weight]};
      line-height: ${theme.line.height[lineHeight]};
      color: ${getColor(theme, color)};

      ${marginBottom &&
      css`
        margin-bottom: ${typeof marginBottom === 'boolean' ? theme.spacing.nano : theme.spacing[marginBottom]};
      `}
    `;
  }}
`;

export default nestedComponent(TypographyWrapper, {
  Caption,
  Heading,
  Paragraph,
  Subtitle
});
