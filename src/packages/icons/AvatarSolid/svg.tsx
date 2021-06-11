import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path d='M132 51.7955C132 71.5647 115.882 87.5909 96 87.5909C76.1177 87.5909 60 71.5647 60 51.7955C60 32.0262 76.1177 16 96 16C115.882 16 132 32.0262 132 51.7955Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M96 87.5909C115.882 87.5909 132 71.5647 132 51.7955C132 32.0262 115.882 16 96 16C76.1177 16 60 32.0262 60 51.7955C60 71.5647 76.1177 87.5909 96 87.5909Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M32 176V139.523C32 117.431 49.9086 99.5227 72 99.5227H120C142.091 99.5227 160 117.431 160 139.523V176H32Z'
    />
  </svg>
);
