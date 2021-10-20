import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M91.2059 58.8936C91.2328 58.8656 91.2601 58.8378 91.2877 58.8103C93.6308 56.4671 97.4298 56.4671 99.773 58.8103L166.243 125.28C168.586 127.623 168.586 131.422 166.243 133.765C163.899 136.108 160.101 136.108 157.757 133.765L95.5112 71.519L32.7875 134.243C30.4444 136.586 26.6454 136.586 24.3023 134.243C21.9591 131.899 21.9591 128.101 24.3023 125.757L90.7719 59.2877C90.9116 59.148 91.0565 59.0166 91.2059 58.8936Z'
    />
  </svg>
);
