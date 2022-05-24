import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import Typography, { TypographyColors } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

type ParagraphTags = 'p' | 'span' | 'strong';

export type ParagraphSizes = 'lg' | 'sm';

export type ParagraphColors = TypographyColors;

export interface IParagraphProps extends IStyledProp {
  id?: string;
  /**
   * Defaults to 'lg'
   */
  size?: ParagraphSizes;
  weight?: keyof HoustonTokens['font']['weight'];
  lineHeight?: keyof HoustonTokens['line']['height'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'p'
   */
  as?: ParagraphTags;
  /**
   * Defaults to 'neutralColor.low.pure'
   */
  color?: ParagraphColors;
  ['aria-label']?: string;
}

type SizesMap = {
  [key in ParagraphSizes]: keyof HoustonTokens['font']['size'];
};

const defaultSizesMap: SizesMap = {
  lg: 'lg',
  sm: 'md'
};

const mobileSizesMap: SizesMap = {
  lg: 'sm',
  sm: 'xs'
};

const Paragraph = React.forwardRef<HTMLParagraphElement | HTMLSpanElement | HTMLElement, IParagraphProps>(
  ({ as = 'p', children, size: sizeProp = 'lg', ...props }, ref) => {
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

export default Paragraph;
