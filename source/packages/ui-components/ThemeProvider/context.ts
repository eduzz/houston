import * as React from 'react';

import { Theme } from '@material-ui/core/styles';

import generateTheme from './_default';

export type ContextThemeType = Partial<Theme>;

const ContextTheme = React.createContext<ContextThemeType>(generateTheme());
const ContextThemeProvider = ContextTheme.Provider;

export function useTheme() {
  const context = React.useContext(ContextTheme);
  return context;
}

export default ContextThemeProvider;
