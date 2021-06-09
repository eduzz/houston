import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M37 72C37 41.04 62.04 16 93 16C123.96 16 149 41.04 149 72C149 114 93 176 93 176C93 176 37 114 37 72ZM93 92C105.15 92 115 82.1503 115 70C115 57.8497 105.15 48 93 48C80.8497 48 71 57.8497 71 70C71 82.1503 80.8497 92 93 92Z'
    />
  </svg>
);
