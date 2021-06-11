import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M28 44.0001V44H28.0001L28 44.0001ZM164 44.0967V148H28V44.0001L94.8545 110.855L94.9028 110.806L96.0966 112L164 44.0967ZM164 44.0414V44H163.959L164 44.0414ZM147.126 44H44.9705L96.0483 95.0778L147.126 44ZM16 42C16 36.4772 20.4772 32 26 32H166C171.523 32 176 36.4772 176 42V150C176 155.523 171.523 160 166 160H26C20.4772 160 16 155.523 16 150V42Z'
    />
  </svg>
);
