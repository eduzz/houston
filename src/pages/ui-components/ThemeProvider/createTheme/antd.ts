import { theme } from 'antd';
import type { ThemeConfig as AntdThemeConfig } from 'antd/lib/config-provider/context';

import { BrandColor } from './brands';

const { darkAlgorithm } = theme;

export default function antdTheme(brancColor: BrandColor, mode: 'dark' | 'light'): AntdThemeConfig {
  return {
    algorithm: mode == 'dark' ? [darkAlgorithm] : [],
    token: removeUndef({
      colorPrimary: brancColor.primary,
      colorBgLayout: mode === 'light' ? '#fcfcfc' : undefined,
      colorBgTextHover: mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : undefined,
      fontFamily: 'Albert Sans',
      fontSize: 14
    }),
    components: {
      Button: {
        controlHeight: 42
      },
      Input: {
        controlHeight: 42
      },
      Select: {
        controlHeight: 42
      },
      DatePicker: {
        controlHeight: 42
      },
      InputNumber: {
        controlHeight: 42
      }
    }
  };
}

function removeUndef(theme: NonNullable<AntdThemeConfig['token']>): AntdThemeConfig['token'] {
  return Object.keys(theme).reduce((acc, key) => {
    if (theme[key] === undefined) return acc;
    return { ...acc, [key]: theme[key] };
  }, {} as typeof theme);
}
