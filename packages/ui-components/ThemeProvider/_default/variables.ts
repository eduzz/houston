const fontSizes = {
  'xx-small': 10,
  'x-small': 12,
  small: 14,
  normal: 16,
  medium: 20,
  large: 24,
  'x-large': 32,
  'xx-large': 40
};

const themeVariable = {
  colors: {
    focusLine: '#B0BEC5'
  },
  radius: (unit: number = 1) => 4 * unit,
  spacing: (unit: number = 4) => 4 * unit,
  textSize: (size: keyof typeof fontSizes = 'normal') => fontSizes[size]
};

export default themeVariable;
