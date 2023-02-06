export const brands = [
  'eduzz',
  'alumy',
  'blinket',
  'jobzz',
  'nutror',
  'orbita',
  'safevideo',
  'telescope',
  'next'
] as const;

export type BrandsBuildin = (typeof brands)[number];
export type BrandColor = { primary: `#${string}`; secondary: `#${string}` };

export const brandsColors: Record<BrandsBuildin, BrandColor> = {
  eduzz: {
    primary: '#0D2772',
    secondary: '#FFBC00'
  },
  alumy: {
    primary: '#6200EE',
    secondary: '#6200EE'
  },
  blinket: {
    primary: '#D81B60',
    secondary: '#D81B60'
  },
  jobzz: {
    primary: '#01579B',
    secondary: '#01579B'
  },
  nutror: {
    primary: '#00A526',
    secondary: '#00A526'
  },
  orbita: {
    primary: '#0D47A1',
    secondary: '#FFBC00'
  },
  safevideo: {
    primary: '#E39837',
    secondary: '#E39837'
  },
  telescope: {
    primary: '#8E24AA',
    secondary: '#8E24AA'
  },
  next: {
    primary: '#6063AB',
    secondary: '#6063AB'
  }
};
