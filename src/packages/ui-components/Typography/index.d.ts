import * as React from 'react';
import { HoustonFontSizes, HoustonFontWeight, HoustonLineHeights } from '../styles/types';
export declare type ITypographyVariant = 'secondary';
export declare type ITypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
export interface ITypographyProps {
    id?: string;
    className?: string;
    size?: HoustonFontSizes;
    lineHeight?: HoustonLineHeights;
    fontWeight?: HoustonFontWeight;
    marginBottom?: boolean;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    variant?: ITypographyVariant;
    component?: ITypographyComponent;
}
declare const _default: React.FC<ITypographyProps>;
export default _default;
