import { Color, HoustonTokens } from '@eduzz/houston-tokens';

export type SupportedColors =
  | 'positive'
  | 'negative'
  | 'warning'
  | 'informative'
  | 'primary'
  | 'secondary'
  | 'low'
  | 'high';

export default function getColorFallback(theme: HoustonTokens, colorKey: SupportedColors = 'primary'): Color {
  if (['low', 'high'].includes(colorKey)) {
    return theme.neutralColor[colorKey];
  }

  if (['positive', 'negative', 'warning', 'informative'].includes(colorKey)) {
    return theme.feedbackColor[colorKey];
  }

  return theme.brandColor[colorKey];
}
