import * as React from 'react';

import { cx } from '@emotion/css';

import styled, { IStyledProp } from '@eduzz/houston-style/styled';
import { HoustonTokens } from '@eduzz/houston-tokens';

export type ITypographyVariant = 'secondary';

export type ITypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

export interface ITypographyProps extends IStyledProp {
  id?: string;
  size?: keyof HoustonTokens['font']['size'];
  lineHeight?: keyof HoustonTokens['line']['height'];
  fontWeight?: keyof HoustonTokens['font']['weight'];
  marginBottom?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variant?: ITypographyVariant;
  component?: ITypographyComponent;
}

const Typography: React.FC<ITypographyProps> = ({ className, variant, id, children, component, onClick }) => {
  return React.createElement(
    component ?? 'p',
    {
      id: id,
      onClick: onClick,
      className: cx(className, className, variant && `--variant-${variant}`)
    },
    children
  );
};

export default styled(Typography)`
  margin: 0;
  font-size: ${({ theme, size }) => theme.font.size[size ?? 'sm']};
  font-weight: ${({ theme, fontWeight }) => theme.font.weight[fontWeight ?? 'regular']};
  line-height: ${({ theme, lineHeight }) => theme.line.height[lineHeight ?? 'md']};
  margin-bottom: ${({ theme, marginBottom }) => (marginBottom ? theme.spacing.nano : null)};

  &.--variant-secondary {
    color: ${({ theme }) => theme.neutralColor.high.dark};
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;
