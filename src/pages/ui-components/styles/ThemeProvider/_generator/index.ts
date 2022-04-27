/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme } from '@mui/material/styles';

import { HoustonThemeBuilder } from '../../types';
import components from './components';
import typography from './typography';
import defaultThemeVariables from './variables';

import '@mui/lab/themeAugmentation';

export default function generateTheme(customTheme?: HoustonThemeBuilder, variables?: any) {
  const palette = { ...defaultThemeVariables.colors, ...(customTheme?.colors ?? {}) };

  return createTheme({
    palette,
    components: components(palette),
    typography,
    ...(defaultThemeVariables as any),
    variables,
    colors: palette
  });
}
