import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M117 167.873C146.169 157.253 167 129.278 167 96.4363C167 63.5951 146.169 35.6191 117 25V37.9381C139.39 47.9043 155 70.3473 155 96.4363C155 122.525 139.39 144.968 117 154.935V167.873ZM62.2616 110.436L65.7576 113.847L89 136.525V55.3475L65.7575 78.0253L62.2616 81.4363H57.3772H37V110.436H57.3772H62.2616ZM89 38.5818L57.3772 69.4363H33.5C28.8056 69.4363 25 72.8261 25 77.0077V114.865C25 119.046 28.8056 122.436 33.5 122.436H57.3772L89 153.291L89.2674 153.552L91.4648 155.696L94.1094 158.276C96.6024 160.708 101 159.062 101 155.696V151.214V148.538V148.234V43.639V43.3344V40.6586V36.1769C101 32.8109 96.6024 31.1641 94.1094 33.5965L91.4648 36.1769L89.2674 38.3209L89 38.5818ZM118.9 130.62C118.274 130.915 117.64 131.187 117 131.436V61.4363C117.64 61.6856 118.274 61.9578 118.9 62.2527C122.851 64.1122 126.44 66.8376 129.463 70.2733C132.487 73.7091 134.885 77.788 136.522 82.277C138.158 86.7661 139 91.5774 139 96.4363C139 101.295 138.158 106.107 136.522 110.596C134.885 115.085 132.487 119.163 129.463 122.599C126.44 126.035 122.851 128.76 118.9 130.62Z'
    />
  </svg>
);
