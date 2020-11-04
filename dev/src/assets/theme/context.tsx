import React from 'react';

export type ThemesTypes = 'light' | 'dark';

export interface IThemeContext {
  currentTheme: ThemesTypes;
  toogleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContext>(null);

export default ThemeContext;
