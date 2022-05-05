import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles/styled';
import type { HoustonTokens } from '@eduzz/houston-tokens';

import { getColorFallback } from '../Helpers/functions';

export type TypographyColors = 'low' | 'high' | 'primary';

export interface ITypographyProps extends IStyledProp {
  id?: string;
  size?: keyof HoustonTokens['font']['size'];
  lineHeight?: keyof HoustonTokens['line']['height'];
  weight?: keyof HoustonTokens['font']['weight'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Defaults to 'low'
   */
  color?: TypographyColors;
  /**
   * Defaults to 'p'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'article';
  ['aria-label']?: string;
}

const Typography = React.forwardRef<any, ITypographyProps>(
  ({ as: Tag = 'p', children, color = 'low', ...props }, ref) => {
    return (
      <Tag ref={ref} color={color} {...props}>
        {children}
      </Tag>
    );
  }
);

export default styled(Typography)`
  ${({ theme, size = 'xs', weight = 'regular', lineHeight = 'md', marginBottom, color = 'low' }) =>
    css`
      margin: 0;
      font-size: ${theme.font.size[size]};
      font-weight: ${theme.font.weight[weight]};
      line-height: ${theme.line.height[lineHeight]};
      margin-bottom: ${marginBottom ? theme.spacing.nano : null};
      color: ${getColorFallback(theme, color).pure};
    `}
`;
