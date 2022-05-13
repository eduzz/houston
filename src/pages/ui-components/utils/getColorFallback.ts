import { Color, HoustonTokens } from '@eduzz/houston-tokens';

export default function getColorFallback(
  theme: HoustonTokens,
  colorKey: 'positive' | 'negative' | 'warning' | 'informative' | 'primary' | 'secondary' | 'low' | 'high' = 'primary'
): Color {
  if (['low', 'high'].includes(colorKey)) {
    return theme.neutralColor[colorKey];
  }
  if (['positive', 'negative', 'warning', 'informative'].includes(colorKey)) {
    return theme.feedbackColor[colorKey];
  }
  return theme.brandColor[colorKey];
}
