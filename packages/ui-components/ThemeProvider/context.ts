import * as React from 'react';

import { Theme } from '@material-ui/core/styles';

import orbita from './orbita';

export type ContextThemeType = Partial<Theme>;

const ContextTheme = React.createContext<ContextThemeType>(orbita);
const ContextThemeProvider = ContextTheme.Provider;

export function useTheme() {
  const context = React.useContext(ContextTheme);
  return context;
}

export default ContextThemeProvider;
