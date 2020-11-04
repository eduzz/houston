import * as React from 'react';

import { Theme } from '@material-ui/core/styles';

export type ContextThemeType = Partial<Theme>;

const ContextTheme = React.createContext<ContextThemeType>({} as ContextThemeType);
const ContextThemeProvider = ContextTheme.Provider;

export function useTheme() {
  const context = React.useContext(ContextTheme);
  return context;
}

export default ContextThemeProvider;
