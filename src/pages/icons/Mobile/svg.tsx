import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M44 144V28H64V35C64 37.7614 66.2386 40 69 40H123C125.761 40 128 37.7614 128 35V28H148V144H44ZM160 26V154V166C160 171.523 155.523 176 150 176H42C36.4772 176 32 171.523 32 166V26C32 20.4772 36.4772 16 42 16H150C155.523 16 160 20.4772 160 26ZM95 167C98.866 167 102 163.866 102 160C102 156.134 98.866 153 95 153C91.134 153 88 156.134 88 160C88 163.866 91.134 167 95 167Z'
    />
  </svg>
);
