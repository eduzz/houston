import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M91.8579 24C94.51 24 97.0536 25.0536 98.9289 26.9289L165.429 93.4289C169.334 97.3342 169.334 103.666 165.429 107.571L107.571 165.429C103.666 169.334 97.3342 169.334 93.4289 165.429L26.9289 98.9289C25.0536 97.0536 24 94.51 24 91.8579V34C24 28.4772 28.4772 24 34 24H91.8579ZM58 68C63.5228 68 68 63.5228 68 58C68 52.4772 63.5228 48 58 48C52.4772 48 48 52.4772 48 58C48 63.5228 52.4772 68 58 68Z'
    />
  </svg>
);
