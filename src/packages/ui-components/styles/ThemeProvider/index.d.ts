import * as React from 'react';
import { ThemeProviderProps } from '@emotion/react/types/theming';
import { HoustonThemeBuilder } from '../types';
declare type IThemeExtends = 'children';
export interface IThemeProviderProps extends Pick<ThemeProviderProps, IThemeExtends> {
    theme?: HoustonThemeBuilder;
    disableCssBaseline?: boolean;
    disabledFontBase?: boolean;
}
declare function ThemeProvider({ children, theme, disableCssBaseline, disabledFontBase }: IThemeProviderProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ThemeProvider>;
export default _default;
