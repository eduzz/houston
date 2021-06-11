import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M48 44V129H164V44H48ZM46 32C40.4772 32 36 36.4772 36 42V131C36 136.523 40.4772 141 46 141H166C171.523 141 176 136.523 176 131V42C176 36.4772 171.523 32 166 32H46Z'
    />
    <path d='M44.2353 64H167.765V86H44.2353V64Z' fill='#546E7A' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.0733 158.684C17.7047 157.881 16 155.64 16 153V70C16 66.6863 18.6863 64 22 64C25.3137 64 28 66.6863 28 70V147.444H105.998C109.312 147.444 111.998 150.13 111.998 153.444C111.998 156.758 109.312 159.444 105.998 159.444H22.998C21.9361 159.444 20.9386 159.168 20.0733 158.684Z'
    />
  </svg>
);
