import type { FeedbackColor } from '../types';

export const feedbackColor: FeedbackColor = {
  positive: {
    pure: '#4CAF50',
    light: '#D2EBD3',
    medium: '#66D26A',
    dark: '#2D8D31'
  },
  negative: {
    pure: '#F44336',
    light: '#FDD9D7',
    medium: '#FF8179',
    dark: '#D72518'
  },
  warning: {
    pure: '#FFCA28',
    light: '#FFF4D4',
    medium: '#FFDD76',
    dark: '#E2AD08'
  },
  informative: {
    pure: '#039BE5',
    light: '#CDEBFA',
    medium: '#71D0FF',
    dark: '#0077B1'
  }
};
