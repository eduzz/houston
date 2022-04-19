import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 193' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M61.9609 115.428C64.304 113.085 64.3041 109.286 61.9609 106.943L42.407 87.3887H128V87.407C128.332 87.3949 128.665 87.3888 129 87.3888C143.912 87.3888 156 99.4771 156 114.389C156 114.724 155.994 115.057 155.982 115.389H156V139.389C156 142.702 158.686 145.389 162 145.389C165.314 145.389 168 142.702 168 139.389V115.389H167.987C167.996 115.056 168 114.723 168 114.389C168 92.8497 150.539 75.3888 129 75.3888C128.666 75.3888 128.332 75.393 128 75.4014V75.3887H43.2498L62.3822 56.2563C64.7254 53.9132 64.7254 50.1142 62.3822 47.771C60.0391 45.4279 56.2401 45.4279 53.897 47.771L26.9289 74.7391C23.0237 78.6443 23.0237 84.976 26.9289 88.8812L53.4756 115.428C55.8188 117.771 59.6178 117.771 61.9609 115.428Z' />
  </svg>
);
