import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';
import type { HoustonTokens } from '@eduzz/houston-tokens';
import Typography, { TypographyColors } from '@eduzz/houston-ui/Typography';

export type CaptionColors = TypographyColors;

export interface ICaptionProps extends IStyledProp {
  id?: string;
  lineHeight?: keyof HoustonTokens['line']['height'];
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'figcaption'
   */
  as?: 'figcaption' | 'p';
  /**
   * Defaults: to 'low'
   */
  color?: CaptionColors;
  ['aria-label']?: string;
}

const Caption = React.forwardRef<HTMLParagraphElement | HTMLElement, ICaptionProps>(
  ({ as = 'figcaption', children, ...props }, ref) => {
    return (
      <Typography as={as} ref={ref} size='xxs' {...props}>
        {children}
      </Typography>
    );
  }
);

export default Caption;
