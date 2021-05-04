import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M136 96C136 73.9086 118.091 56 96 56C73.9086 56 56 73.9086 56 96C56 118.091 73.9086 136 96 136C118.091 136 136 118.091 136 96Z'
      fill='#546E7A'
    />
  </svg>
);
