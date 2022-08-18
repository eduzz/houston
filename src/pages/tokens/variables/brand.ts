import type { BrandColor, BrandColors, Brands } from '../types';

const brands = {
  eduzz: {
    primary: {
      pure: '#0D2772',
      light: '#6C88D9',
      medium: '#000540',
      dark: '#000540'
    },
    secondary: {
      pure: '#FFBC00',
      light: '#FFF4BF',
      medium: '#FFDB4D',
      dark: '#996600'
    }
  },
  alumy: {
    primary: {
      pure: '#6200EE',
      light: '#D4CCFF',
      medium: '#8E66FF',
      dark: '#440087'
    },
    secondary: {
      pure: '#6200EE',
      light: '#D4CCFF',
      medium: '#8E66FF',
      dark: '#440087'
    }
  },
  blinket: {
    primary: {
      pure: '#D81B60',
      light: '#F48FB1 ',
      medium: '#EC407A',
      dark: '#AD1457'
    },
    secondary: {
      pure: '#D81B60',
      light: '#F48FB1 ',
      medium: '#EC407A',
      dark: '#AD1457'
    }
  },
  jobzz: {
    primary: {
      pure: '#01579B',
      light: '#99BCD7',
      medium: '#3479AF',
      dark: '#002F6C'
    },
    secondary: {
      pure: '#01579B',
      light: '#99BCD7',
      medium: '#3479AF',
      dark: '#002F6C'
    }
  },
  nutror: {
    primary: {
      pure: '#00A526',
      light: '#99E9BA',
      medium: '#00C853',
      dark: '#00801D'
    },
    secondary: {
      pure: '#00A526',
      light: '#99E9BA',
      medium: '#00C853',
      dark: '#00801D'
    }
  },
  orbita: {
    primary: {
      pure: '#0D47A1',
      light: '#9EB5D9',
      medium: '#265AAB',
      dark: '#072D83'
    },
    secondary: {
      pure: '#FFBC00',
      light: '#FFF4BF',
      medium: '#FFDB4D',
      dark: '#996600'
    }
  },
  safevideo: {
    primary: {
      pure: '#E39837',
      light: '#FEC92D',
      medium: '#F5B431',
      dark: '#804306'
    },
    secondary: {
      pure: '#E39837',
      light: '#FEC92D',
      medium: '#F5B431',
      dark: '#804306'
    }
  },
  telescope: {
    primary: {
      pure: '#8E24AA',
      light: '#D2A7DD',
      medium: '#9A3AB3',
      dark: '#560877'
    },
    secondary: {
      pure: '#8E24AA',
      light: '#D2A7DD',
      medium: '#9A3AB3',
      dark: '#560877'
    }
  },
  next: {
    primary: {
      pure: '#6063AB',
      light: '#A2A4DF',
      medium: '#8184C7',
      dark: '#3C4194'
    },
    secondary: {
      pure: '#6063AB',
      light: '#A2A4DF',
      medium: '#8184C7',
      dark: '#3C4194'
    }
  }
} as BrandColors;

export function createBrandColors(brand: Brands | BrandColor): BrandColor {
  const brandVariables = typeof brand === 'string' ? brands[brand] : brand;

  if (!brandVariables) {
    throw new Error('You must provide a valid brand');
  }

  return brandVariables;
}

export const getSupportedBrands = () => Object.keys(brands);
