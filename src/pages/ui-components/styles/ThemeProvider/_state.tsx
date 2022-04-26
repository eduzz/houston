import { HoustonTokens } from '@eduzz/houston-tokens';

let currentTheme: HoustonTokens;

export function setCurrentTheme(theme: HoustonTokens) {
  currentTheme = theme;
}

export function getCurrentTime() {
  return currentTheme;
}
