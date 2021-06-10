import { IIconSize } from '../interfaces';

export const sizeMap = {
  small: 20,
  medium: 32,
  large: 48
};

export default (size: IIconSize = 'medium') => {
  if (typeof size === 'number') {
    return size;
  }

  return sizeMap[size];
};
