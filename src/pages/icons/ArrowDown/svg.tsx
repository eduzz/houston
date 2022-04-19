import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M96.9995 25.0005C100.313 25.0005 103 27.6868 103 31.0006L103 152.001C103 155.314 100.313 158.001 96.9995 158.001C93.6858 158.001 90.9995 155.314 90.9995 152.001L90.9995 31.0006C90.9995 27.6868 93.6858 25.0005 96.9995 25.0005Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M133.243 132.727C135.586 130.384 135.586 126.585 133.243 124.242C130.899 121.899 127.101 121.899 124.757 124.242L95.9853 153.014L67.7279 124.757C65.3848 122.414 61.5858 122.414 59.2426 124.757C56.8995 127.1 56.8995 130.899 59.2426 133.242L91.7574 165.757C94.1005 168.1 97.8995 168.1 100.243 165.757C100.37 165.63 100.49 165.499 100.603 165.364C100.645 165.324 100.687 165.283 100.728 165.242L133.243 132.727Z'
    />
  </svg>
);
