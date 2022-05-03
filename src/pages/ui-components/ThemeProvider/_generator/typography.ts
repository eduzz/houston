import { TypographyOptions } from '@mui/material/styles/createTypography';

import { IHoustonTheme } from '@eduzz/houston-styles';

export default function typography(theme: IHoustonTheme): TypographyOptions {
  return {
    fontFamily: theme.font.family.base,
    fontSize: Number(theme.font.size.xs.replace('px', '')),

    body1: {
      fontFamily: theme.font.family.base,
      fontSize: Number(theme.font.size.xs.replace('px', '')),
      fontWeight: theme.font.weight.regular
    },

    body2: {
      fontFamily: theme.font.family.base,
      fontSize: Number(theme.font.size.xs.replace('px', '')),
      fontWeight: theme.font.weight.regular
    },

    button: {
      fontWeight: theme.font.weight.semibold
    }
  };
}
