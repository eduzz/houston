import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M98.9289 26.9289C97.0536 25.0536 94.51 24 91.8579 24H34C28.4772 24 24 28.4772 24 34V91.8579C24 94.51 25.0536 97.0536 26.9289 98.9289L93.4289 165.429C97.3342 169.334 103.666 169.334 107.571 165.429L165.429 107.571C169.334 103.666 169.334 97.3342 165.429 93.4289L98.9289 26.9289ZM36 91.0294V36H91.0294L155.529 100.5L100.5 155.529L36 91.0294Z'
      fill='#546E7A'
    />
    <path
      d='M68 58C68 63.5228 63.5228 68 58 68C52.4772 68 48 63.5228 48 58C48 52.4772 52.4772 48 58 48C63.5228 48 68 52.4772 68 58Z'
      fill='#546E7A'
    />
  </svg>
);
