import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import Typography, { TypographyColors } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

type SubtitleTags = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type SubtitleSizes = 'lg' | 'sm';

export type SubtitleColors = TypographyColors;

export interface ISubtitleProps extends IStyledProp {
  id?: string;
  /**
   * Defaults to 'lg'
   */
  size?: SubtitleSizes;
  weight?: keyof HoustonTokens['font']['weight'];
  lineHeight?: keyof HoustonTokens['line']['height'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'h2'
   */
  as?: SubtitleTags;
  /**
   * Defaults to 'low'
   */
  color?: SubtitleColors;
  ['aria-label']?: string;
}

type SizesMap = {
  [key in SubtitleSizes]: keyof HoustonTokens['font']['size'];
};

const defaultSizesMap: SizesMap = {
  lg: 'lg',
  sm: 'md'
};

const mobileSizesMap: SizesMap = {
  lg: 'md',
  sm: 'sm'
};

const Subtitle = React.forwardRef<HTMLHeadingElement | HTMLParagraphElement, ISubtitleProps>(
  ({ as = 'h2', children, size: sizeProp = 'lg', ...props }, ref) => {
    const { breakpoints } = useHoustonTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));
    const sizesMap = isMobile ? mobileSizesMap : defaultSizesMap;
    const fontSize = sizesMap[sizeProp];
    return (
      <Typography as={as} ref={ref} size={fontSize} {...props}>
        {children}
      </Typography>
    );
  }
);

export default Subtitle;
