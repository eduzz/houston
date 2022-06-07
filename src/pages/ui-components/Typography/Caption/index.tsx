import * as React from 'react';

import { IStyledProp } from '@eduzz/houston-styles/styled';

import Typography, { ITypographyProps } from '..';

export interface ICaptionProps extends IStyledProp, Omit<ITypographyProps, 'size' | 'as'> {
  /**
   * Defaults to 'figcaption'
   */
  as?: 'figcaption' | 'p';
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
