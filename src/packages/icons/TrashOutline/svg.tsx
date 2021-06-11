import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M76.5 16C71.8056 16 68 19.8056 68 24.5V27H40C35.5817 27 32 30.5817 32 35C32 39.4183 35.5817 43 40 43H152C156.418 43 160 39.4183 160 35C160 30.5817 156.418 27 152 27H125V24.5C125 19.8056 121.194 16 116.5 16H76.5Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M46 55C49.3137 55 52 57.6863 52 61V62.0583V65.1333V164H139V65.1333V62.0583V61C139 57.6863 141.686 55 145 55C148.314 55 151 57.6863 151 61V62.0583V65.1333V166C151 171.523 146.523 176 141 176H50C44.4772 176 40 171.523 40 166V65.1333V62.0583V61C40 57.6863 42.6863 55 46 55Z'
    />
  </svg>
);
