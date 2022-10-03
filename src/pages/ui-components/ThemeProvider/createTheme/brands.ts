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

export type BrandsBuildin = typeof brands[number];

export const brandsPrimaryColor: Record<BrandsBuildin, `#${string}`> = {
  eduzz: '#0D2772',
  alumy: '#6200EE',
  blinket: '#D81B60',
  jobzz: '#01579B',
  nutror: '#00A526',
  orbita: '#0D47A1',
  safevideo: '#E39837',
  telescope: '#8E24AA',
  next: '#6063AB'
};
