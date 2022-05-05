import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import useMediaQuery from '../hooks/useMediaQuery';
import Typography, { TypographyColors } from '../Typography';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingSizes = 'display' | 'x-large' | 'large' | 'medium' | 'small' | 'x-small';

export type HeadingColors = TypographyColors;

export interface IHeadingProps extends IStyledProp {
  id?: string;
  size?: HeadingSizes;
  lineHeight?: keyof HoustonTokens['line']['height'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'h1'
   */
  as?: HeadingTags;
  /**
   * Defaults to 'low'
   */
  color?: HeadingColors;
  ['aria-label']?: string;
}

type SizesMap = {
  [key in HeadingTags | HeadingSizes]: keyof HoustonTokens['font']['size'];
};

const defaultSizesMap: SizesMap = {
  h1: 'giant',
  h2: 'xxxl',
  h3: 'xxl',
  h4: 'lg',
  h5: 'md',
  h6: 'xs',
  display: 'giant',
  ['x-large']: 'xxxl',
  large: 'xxl',
  medium: 'lg',
  small: 'md',
  ['x-small']: 'xs'
};

const mobileSizesMap: SizesMap = {
  h1: 'xxxl',
  h2: 'xxl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
  display: 'xxxl',
  ['x-large']: 'xxl',
  large: 'lg',
  medium: 'md',
  small: 'sm',
  ['x-small']: 'xs'
};

const Heading = React.forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h1', children, size: sizeProp, ...props }, ref) => {
    const { breakpoints } = useHoustonTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));
    const sizesMap = isMobile ? mobileSizesMap : defaultSizesMap;
    const fontSize = sizeProp ? sizesMap[sizeProp] : sizesMap[as];
    return (
      <Typography as={as} ref={ref} size={fontSize} weight='bold' {...props}>
        {children}
      </Typography>
    );
  }
);

export default Heading;
