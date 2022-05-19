import { TypographyOptions } from '@mui/material/styles/createTypography';

import { IHoustonTheme } from '@eduzz/houston-styles';

function cleanUnit(value: string) {
  return parseFloat(value.replace(/\w/g, ''));
}

export default function typography(theme: IHoustonTheme): TypographyOptions {
  const fontInPx = theme.remToPx(cleanUnit(theme.font.size.xs));
  return {
    fontFamily: theme.font.family.base,
    fontSize: fontInPx,
    body1: {
      fontFamily: theme.font.family.base,
      fontSize: fontInPx,
      fontWeight: theme.font.weight.regular
    },
    body2: {
      fontFamily: theme.font.family.base,
      fontSize: fontInPx,
      fontWeight: theme.font.weight.regular
    },
    button: {
      fontWeight: theme.font.weight.semibold
    }
  };
}
