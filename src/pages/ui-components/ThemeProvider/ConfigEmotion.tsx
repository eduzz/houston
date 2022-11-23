import { useMemo } from 'react';

import { theme } from 'antd';
import type { AliasToken } from 'antd/lib/theme/interface';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { HoustonTheme } from '.';

const { useToken } = theme;

declare module '@emotion/react' {
  interface Theme extends Omit<HoustonTheme, 'antd'> {
    antd: AliasToken;
  }
}

export interface ConfigEmotionProps {
  theme: HoustonTheme;
  children: React.ReactNode;
}

const ConfigEmotion = ({ theme, children }: ConfigEmotionProps) => {
  const { token } = useToken();

  const emotionTheme = useMemo(() => {
    return { ...theme, antd: token };
  }, [theme, token]);

  return <EmotionThemeProvider theme={emotionTheme}>{children}</EmotionThemeProvider>;
};

export default ConfigEmotion;
