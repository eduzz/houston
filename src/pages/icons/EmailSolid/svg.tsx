import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M28 44V148H164V44H28ZM26 32C20.4772 32 16 36.4772 16 42V150C16 155.523 20.4772 160 26 160H166C171.523 160 176 155.523 176 150V42C176 36.4772 171.523 32 166 32H26Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M26 32C20.4772 32 16 36.4772 16 42V150C16 155.523 20.4772 160 26 160H166C171.523 160 176 155.523 176 150V42C176 36.4772 171.523 32 166 32H26ZM87.5182 103.518L26 42H42.9706L96.0035 95.033L149.036 42H166.007L104.489 103.518L104.492 103.522L96.0071 112.007L96.0035 112.004L96 112.007L87.5147 103.522L87.5182 103.518Z'
    />
  </svg>
);
