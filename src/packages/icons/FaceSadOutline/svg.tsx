import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M76 90C76 98.8366 68.8366 106 60 106C51.1634 106 44 98.8366 44 90C44 81.1634 51.1634 74 60 74C68.8366 74 76 81.1634 76 90Z' />
    <path d='M148 90C148 98.8366 140.837 106 132 106C123.163 106 116 98.8366 116 90C116 81.1634 123.163 74 132 74C140.837 74 148 81.1634 148 90Z' />
    <path d='M96 124C82.7452 124 72 131.163 72 140H120C120 131.163 109.255 124 96 124Z' fill='currentColor' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M176 96C176 140.183 140.183 176 96 176C51.8172 176 16 140.183 16 96C16 51.8172 51.8172 16 96 16C140.183 16 176 51.8172 176 96ZM164 96C164 133.555 133.555 164 96 164C58.4446 164 28 133.555 28 96C28 58.4446 58.4446 28 96 28C133.555 28 164 58.4446 164 96Z'
    />
  </svg>
);
