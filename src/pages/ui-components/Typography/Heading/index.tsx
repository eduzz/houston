import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import Typography, { TypographyColors } from '..';
import useMediaQuery from '../../hooks/useMediaQuery';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingSizes = 'display' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

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
   * Defaults to 'neutralColor.low.pure'
   */
  color?: HeadingColors;
  ['aria-label']?: string;
}

type FontProps = 'size' | 'weight';

type FontPropMap<P extends FontProps> = {
  [key in HeadingTags | HeadingSizes]: keyof HoustonTokens['font'][P];
};

const defaultSizesMap: FontPropMap<'size'> = {
  h1: 'giant',
  h2: 'xxxl',
  h3: 'xxl',
  h4: 'lg',
  h5: 'md',
  h6: 'xs',
  display: 'giant',
  xl: 'xxxl',
  lg: 'xxl',
  md: 'lg',
  sm: 'md',
  xs: 'xs'
};

const mobileSizesMap: FontPropMap<'size'> = {
  h1: 'xxxl',
  h2: 'xxl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
  display: 'xxxl',
  xl: 'xxl',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

const weightsMap: FontPropMap<'weight'> = {
  h1: 'regular',
  h2: 'regular',
  h3: 'semibold',
  h4: 'semibold',
  h5: 'semibold',
  h6: 'bold',
  display: 'regular',
  xl: 'regular',
  lg: 'semibold',
  md: 'semibold',
  sm: 'semibold',
  xs: 'bold'
};

const Heading = React.forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ as = 'h1', children, size: sizeProp, ...props }, ref) => {
    const { breakpoints } = useHoustonTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));
    const sizesMap = isMobile ? mobileSizesMap : defaultSizesMap;
    const fontSize = sizeProp ? sizesMap[sizeProp] : sizesMap[as];
    const fontWeight = sizeProp ? weightsMap[sizeProp] : weightsMap[as];
    return (
      <Typography as={as} ref={ref} size={fontSize} weight={fontWeight} {...props}>
        {children}
      </Typography>
    );
  }
);

export default Heading;
