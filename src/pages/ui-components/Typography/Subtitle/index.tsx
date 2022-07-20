import * as React from 'react';

import { StyledProp } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import Typography, { TypographyProps } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

type SubtitleTags = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type SubtitleSizes = 'lg' | 'sm';

export interface SubtitleProps extends StyledProp, Omit<TypographyProps, 'size' | 'as'> {
  /**
   * Defaults to 'lg'
   */
  size?: SubtitleSizes;
  /**
   * Defaults to 'h2'
   */
  as?: SubtitleTags;
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

const Subtitle = React.forwardRef<HTMLHeadingElement | HTMLParagraphElement, SubtitleProps>(
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
