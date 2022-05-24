import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles/styled';
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

const Typography = React.forwardRef<any, ITypographyProps>(({ as: Tag = 'p', className, ...props }, ref) => {
  return <Tag ref={ref} className={className} {...props} />;
});

const TypographyWrapper = styled(Typography)`
  ${({ theme, size = 'xxs', lineHeight = 'md', weight = 'regular', color = 'neutralColor.low.pure', marginBottom }) => {
    function getColor(color: TypographyColors) {
      if (color === 'inherit') {
        return 'inherit';
      }

      if (color === 'primary') {
        return theme.brandColor.primary.pure;
      }

      const [themeColor, level, variable] = color.split('.');
      return theme[themeColor][level][variable];
    }
    return css`
      margin: 0;
      font-size: ${theme.font.size[size]};
      font-weight: ${theme.font.weight[weight]};
      line-height: ${theme.line.height[lineHeight]};
      color: ${getColor(color)};

      ${marginBottom &&
      css`
        margin-bottom: ${theme.spacing.nano};
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
