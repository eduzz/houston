import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M109.417 29.0208C109.417 25.7071 112.104 23.0208 115.417 23.0208L161.4 23.0208C161.459 23.0208 161.517 23.0216 161.575 23.0233C161.75 23.0079 161.928 23 162.107 23C165.421 23 168.107 25.6863 168.107 29V74.9828C168.107 78.2965 165.421 80.9828 162.107 80.9828C158.794 80.9828 156.107 78.2965 156.107 74.9828V42.0707L100.159 98.0188C98.5154 99.6626 95.2833 99.0956 92.9402 96.7524C90.597 94.4093 90.03 91.1772 91.6738 89.5335L146.186 35.0208L115.417 35.0208C112.104 35.0208 109.417 32.3345 109.417 29.0208ZM156.553 156.256L34.9243 156.733V35.1045H89.5378C92.8306 35.1045 95.5 32.4352 95.5 29.1424C95.5 25.8495 92.8306 23.1802 89.5378 23.1802H38.2632C26.8158 23.1802 23 26.996 23 38.4434V152.069C23 156.342 23.3174 161.82 26.3388 164.841C29.3602 167.863 34.8382 168.18 39.1111 168.18H151.889C156.162 168.18 161.64 167.863 164.661 164.841C167.683 161.82 168 156.342 168 152.069V101.404C168 98.2428 165.437 95.6802 162.276 95.6802C159.115 95.6802 156.553 98.2428 156.553 101.404V156.256Z'
    />
  </svg>
);
