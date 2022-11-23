import { useMemo } from 'react';

import { theme } from 'antd';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { HoustonTheme } from '.';

const { useToken } = theme;

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
