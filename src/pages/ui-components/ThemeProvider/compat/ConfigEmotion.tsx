import { useMemo } from 'react';

import { theme as antdTheme } from 'antd';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { HoustonThemeDeprecated } from '.';

export interface ConfigEmotionProps {
  theme: HoustonThemeDeprecated;
  children: React.ReactNode;
}

const ConfigEmotion = ({ theme, children }: ConfigEmotionProps) => {
  const { token } = antdTheme.useToken();

  const emotionTheme = useMemo(() => {
    return { ...theme, antd: token };
  }, [theme, token]);

  return <EmotionThemeProvider theme={emotionTheme as any}>{children}</EmotionThemeProvider>;
};

export default ConfigEmotion;
