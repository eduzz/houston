import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles/styled';
import type { HoustonTokens } from '@eduzz/houston-tokens';

export interface ITypographyProps extends IStyledProp {
  id?: string;
  size?: keyof HoustonTokens['font']['size'];
  lineHeight?: keyof HoustonTokens['line']['height'];
  weight?: keyof HoustonTokens['font']['weight'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'p'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'article';
  ['aria-label']?: string;
}

const Typography = React.forwardRef<any, ITypographyProps>(({ as: Tag = 'p', children, ...props }, ref) => {
  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  );
});

export default styled(Typography)`
  ${({ theme, size = 'xs', weight: fontWeight = 'regular', lineHeight = 'md', marginBottom }) => css`
    margin: 0;
    font-size: ${theme.font.size[size]};
    font-weight: ${theme.font.weight[fontWeight]};
    line-height: ${theme.line.height[lineHeight]};
    margin-bottom: ${marginBottom ? theme.spacing.nano : null};
  `}
`;
