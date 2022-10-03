import * as React from 'react';

import { StyledProp } from '@eduzz/houston-styles/styled';

import Typography, { TypographyProps } from '..';

export interface CaptionProps extends StyledProp, Omit<TypographyProps, 'size' | 'as'> {
  /**
   * Defaults to 'figcaption'
   */
  as?: 'figcaption' | 'p';
}

const Caption = React.forwardRef<HTMLParagraphElement | HTMLElement, CaptionProps>(
  ({ as = 'figcaption', children, ...props }, ref) => {
    return (
      <Typography as={as} ref={ref} size='xxs' {...props}>
        {children}
      </Typography>
    );
  }
);

/**
 * @deprecated Use Typography from Antd
 * https://ant.design/components/typography/
 */
export default Caption;
