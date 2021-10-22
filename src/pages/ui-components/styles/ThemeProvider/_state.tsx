import { Theme } from '@mui/material/styles';

let currentTheme: Theme;

export function setCurrentTheme(theme: Theme) {
  currentTheme = theme;
}

export function getCurrentTime() {
  return currentTheme;
}
