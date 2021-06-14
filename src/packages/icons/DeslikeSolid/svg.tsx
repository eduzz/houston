import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M88.0888 156.239C83.6682 161.147 75.5375 161.561 72.8295 155.634C70.3989 150.313 69.6956 144.321 70.9888 138.458L76 115.738H28C21.3726 115.738 16 110.625 16 104.319V90.8678C16 89.696 16.235 88.5349 16.6923 87.4469L34.9711 43.9633C38.0084 36.7379 45.3626 32 53.5407 32H128V111.931L88.0888 156.239ZM140 38C140 34.6863 142.686 32 146 32H170C173.314 32 176 34.6863 176 38V106C176 109.314 173.314 112 170 112H146C142.686 112 140 109.314 140 106V38Z'
    />
  </svg>
);
