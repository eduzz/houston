import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 84H176V149C176 154.523 171.523 159 166 159H26C20.4772 159 16 154.523 16 149V84Z' fill='currentColor' />
    <path d='M16 42C16 36.4772 20.4772 32 26 32H166C171.523 32 176 36.4772 176 42V64H16V42Z' fill='currentColor' />
  </svg>
);
