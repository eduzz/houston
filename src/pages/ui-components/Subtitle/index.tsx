import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import useMediaQuery from '../hooks/useMediaQuery';
import Typography from '../Typography';

type SubtitleTags = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type SubtitleSizes = 'large' | 'small';

export interface IHeadingProps extends IStyledProp {
  id?: string;
  /**
   * Defaults to 'large'
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
  ['aria-label']?: string;
}

type SizesMap = {
  [key in SubtitleSizes]: keyof HoustonTokens['font']['size'];
};

const defaultSizesMap: SizesMap = {
  large: 'lg',
  small: 'md'
};

const mobileSizesMap: SizesMap = {
  large: 'md',
  small: 'sm'
};

const Subtitle = React.forwardRef<HTMLHeadingElement | HTMLParagraphElement, IHeadingProps>(
  ({ as = 'h2', children, size: sizeProp = 'large', ...props }, ref) => {
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
