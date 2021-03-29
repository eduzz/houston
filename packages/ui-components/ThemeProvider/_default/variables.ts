import defaultPalette from './palette';

const fontSizes = {
  'xx-small': 10,
  'x-small': 12,
  small: 14,
  normal: 15,
  docs: 16,
  medium: 20,
  large: 24,
  'x-large': 32,
  'xx-large': 40
};

const lineHeights = {
  compact: 1.2,
  normal: 1.5,
  comfortable: 1.8
};

const fontWeight = {
  light: 300,
  regular: 400,
  semibold: 600,
  bold: 700
};

const palette = defaultPalette;

export type FontSizes = keyof typeof fontSizes;
export type LineHeights = keyof typeof lineHeights;
export type FontWeight = keyof typeof fontWeight;

const themeVariable = {
  fontFamily: 'Open Sans, "Helvetica Neue", Arial, sans-serif',
  colors: { focusLine: '#B0BEC5' },
  radius: (unit: number = 1) => 4 * unit,
  spacing: (unit: number = 4) => 4 * unit,
  textSize: (size: FontSizes = 'normal') => fontSizes[size],
  lineHeight: (size: LineHeights = 'normal') => lineHeights[size],
  fontWeight: (size: FontWeight = 'regular') => fontWeight[size],
  palette
};

export default themeVariable;
