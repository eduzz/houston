import * as React from 'react';

import type { AliasToken } from 'antd/es/theme/interface';
import type { ConfigProviderProps } from 'antd/lib/config-provider';
import type { ThemeConfig as AntdThemeConfig } from 'antd/lib/config-provider/context';

import type { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react/types/theming';

import type { HoustonTokens, Spacing } from '@eduzz/houston-tokens';

import createThemeInternal, { CreateTheme } from './createTheme';
import ThemeProvider from '..';
import DialogGlobal from '../../Dialog/Global';
import PopoverRoot from '../../Popover/Root';
import ToastContainer from '../../Toast/Container';
import { mediaUtils } from '../mediaQuery';

export const createTheme = createThemeInternal;

export interface HoustonThemeDeprecatedCustomVariables {}

export interface HoustonThemeDeprecated extends Omit<HoustonTokens, 'hexToRgba' | 'spacing'> {
  mode: 'dark' | 'light';
  primaryColor: string;
  secondaryColor: string;
  mediaQuery: typeof mediaUtils;
  hexToRgba: (hexColor: string, opacity?: number) => string;
  variables?: HoustonThemeDeprecatedCustomVariables;
  spacing: ((unit?: number) => string) & Spacing;

  components: {
    topBarHeight: number;
  };

  antd: AntdThemeConfig;
}

declare module '@emotion/react' {
  interface Theme extends Omit<HoustonThemeDeprecated, 'antd'> {
    antd: AliasToken;
    spacing: ((unit?: number) => string) & Spacing;
  }
}

export interface ThemeProviderProps
  extends Pick<EmotionThemeProviderProps, 'children'>,
    Omit<ConfigProviderProps, 'theme' | 'children' | 'componentSize'> {
  theme?: CreateTheme;
  /**
   * Dark mode experimental
   */
  mode?: 'dark' | 'light' | 'system';
  disableResetStyles?: boolean;
  /**
   * @deprecated
   */
  disableCssBaseline?: boolean;
  /**
   * @deprecated
   */
  disabledFontBase?: boolean;
  disableToast?: boolean;
  disableDialogs?: boolean;
}

function ThemeProviderCompat({ children, disableDialogs, disableToast, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider {...props}>
      <PopoverRoot>
        {!disableToast && <ToastContainer />}
        {!disableDialogs && <DialogGlobal />}

        {children}
      </PopoverRoot>
    </ThemeProvider>
  );
}

/**
 * @deprecated migrate to original ThemeProvider
 */
export default React.memo(ThemeProviderCompat);
