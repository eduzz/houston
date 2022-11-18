import { theme } from 'antd';
import type { ThemeConfig as AntdThemeConfig } from 'antd/es/config-provider/context';

import { BrandColor } from './brands';

const { darkAlgorithm } = theme;

export default function antdTheme(brancColor: BrandColor, mode: 'dark' | 'light'): AntdThemeConfig {
  return {
    algorithm: mode == 'dark' ? [darkAlgorithm] : [],
    token: removeUndef({
      colorPrimary: brancColor.primary,
      colorBgContainer: mode === 'light' ? '#fcfcfc' : '#111111',
      colorBorder: mode === 'light' ? '#f4f4f4' : undefined,
      controlHeight: 42,
      fontFamily: 'Albert Sans',
      fontSize: 14
    })
  };
}

function removeUndef(theme: NonNullable<AntdThemeConfig['token']>): AntdThemeConfig['token'] {
  return Object.keys(theme).reduce((acc, key) => {
    if (theme[key] === undefined) return acc;
    return { ...acc, [key]: theme[key] };
  }, {} as typeof theme);
}
