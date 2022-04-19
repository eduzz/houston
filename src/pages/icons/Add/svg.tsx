import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M97 24C100.314 24 103 26.6863 103 30L103 162C103 165.314 100.314 168 97 168C93.6863 168 91 165.314 91 162L91 30C91 26.6863 93.6863 24 97 24Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 96C24 92.6863 26.6863 90 30 90L162 90C165.314 90 168 92.6863 168 96C168 99.3137 165.314 102 162 102L30 102C26.6863 102 24 99.3137 24 96Z'
    />
  </svg>
);
