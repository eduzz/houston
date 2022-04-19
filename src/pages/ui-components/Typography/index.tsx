import * as React from 'react';

import { cx } from '@emotion/css';

import styled, { IStyledProp } from '../styles/styled';
import { HoustonFontSizes, HoustonFontWeight, HoustonLineHeights } from '../styles/types';

export type ITypographyVariant = 'secondary';

export type ITypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

export interface ITypographyProps extends IStyledProp {
  id?: string;
  size?: HoustonFontSizes;
  lineHeight?: HoustonLineHeights;
  fontWeight?: HoustonFontWeight;
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
  font-size: ${({ theme, size }) => theme.textSize(size ?? 'normal')}px;
  line-height: ${({ theme, lineHeight }) => theme.lineHeight(lineHeight ?? 'normal')};
  font-weight: ${({ theme, fontWeight }) => theme.fontWeight(fontWeight ?? 'regular')};
  margin-bottom: ${({ theme, marginBottom }) => (marginBottom ? theme.spacing(2) : null)};

  &.--variant-secondary {
    color: ${({ theme }) => theme.colors.grey[500]};
    font-size: ${({ theme }) => theme.textSize('small')};
  }
`;
