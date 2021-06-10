import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path d='M67 46.1539C67 29.5003 79.536 16 95 16C110.464 16 123 29.5003 123 46.1539V97.8462C123 114.5 110.464 128 95 128C79.536 128 67 114.5 67 97.8462V46.1539Z' />
    <path d='M89 145H101V172H89V145Z' fill='#546E7A' />
    <path d='M73 170C73 166.686 75.6863 164 79 164H111C114.314 164 117 166.686 117 170C117 173.314 114.314 176 111 176H79C75.6863 176 73 173.314 73 170Z' />
    <path d='M135 94C135 90.6863 137.686 88 141 88C144.314 88 147 90.6863 147 94V100C147 106.829 145.655 113.591 143.042 119.9C140.428 126.208 136.598 131.941 131.77 136.77C126.941 141.598 121.208 145.428 114.9 148.042C108.591 150.655 101.829 152 95 152C88.1713 152 81.4094 150.655 75.1005 148.042C68.7915 145.428 63.0591 141.598 58.2304 136.77C53.4018 131.941 49.5715 126.208 46.9583 119.9C44.345 113.591 43 106.829 43 100V94C43 90.6863 45.6863 88 49 88C52.3137 88 55 90.6863 55 94V100C55 105.253 56.0346 110.454 58.0448 115.307C60.055 120.16 63.0014 124.57 66.7157 128.284C70.4301 131.999 74.8396 134.945 79.6927 136.955C84.5457 138.965 89.7471 140 95 140C100.253 140 105.454 138.965 110.307 136.955C115.16 134.945 119.57 131.999 123.284 128.284C126.999 124.57 129.945 120.16 131.955 115.307C133.965 110.454 135 105.253 135 100V94Z' />
  </svg>
);
