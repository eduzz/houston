import * as React from 'react';

import { StyledProp } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import Typography, { TypographyProps } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

type ParagraphTags = 'p' | 'span' | 'strong';

export type ParagraphSizes = 'sm' | 'md' | 'lg';

export interface ParagraphProps extends StyledProp, Omit<TypographyProps, 'size' | 'as'> {
  /**
   * Defaults to 'lg'
   */
  size?: ParagraphSizes;
  /**
   * Defaults to 'p'
   */
  as?: ParagraphTags;
}

type SizesMap = {
  [key in ParagraphSizes]: keyof HoustonTokens['font']['size'];
};

const defaultSizesMap: SizesMap = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm'
};

const mobileSizesMap: SizesMap = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm'
};

const Paragraph = React.forwardRef<HTMLParagraphElement | HTMLSpanElement | HTMLElement, ParagraphProps>(
  ({ as = 'p', children, size: sizeProp = 'lg', ...props }, ref) => {
    const { breakpoints } = useHoustonTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));
    const sizesMap = isMobile ? mobileSizesMap : defaultSizesMap;
    const fontSize = sizesMap[sizeProp];

    return (
      <Typography as={as} ref={ref} size={fontSize} lineHeight={sizeProp === 'lg' ? 'md' : 'lg'} {...props}>
        {children}
      </Typography>
    );
  }
);

/**
 * @deprecated Use Typography from Antd
 * https://ant.design/components/typography/
 */
export default Paragraph;
