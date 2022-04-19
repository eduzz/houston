import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M51.5942 25.7021L32.058 150.468C31.6352 152.936 33.5803 155.149 36.0329 155.149H64.9566L71.9761 110.128C72.4836 106.809 75.2744 104.426 78.5728 104.426H92.358C119.421 104.426 140.564 93.3617 146.823 61.3617C146.983 60.7687 147.076 60.1758 147.166 59.6044C147.217 59.2737 147.268 58.9503 147.33 58.6383C149.191 46.8085 147.33 38.8085 140.987 31.4894C133.968 23.4043 121.366 20 105.128 20H58.1909C54.8925 20 52.1017 22.383 51.5942 25.7021ZM135.505 56.5877C136.25 51.7466 136.107 48.4919 135.549 46.0998C135.018 43.827 133.973 41.7201 131.922 39.3523C128.459 35.3675 120.484 32 105.128 32H62.7543L45.3503 143.149H54.6826L60.114 108.314C60.115 108.307 60.1161 108.3 60.1172 108.293C61.5245 99.1559 69.3238 92.4255 78.5728 92.4255H92.358C104.391 92.4255 113.682 89.9506 120.407 85.1363C126.889 80.4957 132.38 72.6863 135.046 59.0584L135.128 58.6371L135.219 58.3005C135.226 58.2641 135.24 58.1861 135.262 58.0518C135.275 57.971 135.289 57.8849 135.306 57.7707C135.323 57.6657 135.345 57.5274 135.367 57.3877C135.401 57.1743 135.447 56.8975 135.505 56.5877Z'
    />
    <path d='M74.3359 172H90.8358C93.7108 172 96.1639 169.872 96.6707 166.978L96.9246 165.702L101.492 136.341L101.83 134.723C102.253 131.83 104.706 129.702 107.666 129.702H111.302C134.982 129.702 153.504 120 158.916 92.0847C160.675 83.1071 160.377 75.2396 157.405 68.9482C155.029 78.1734 151.374 86.095 146.502 92.6862C144.089 102.462 139.817 108.139 134.977 111.602C129.433 115.569 121.64 117.702 111.302 117.702H107.666C98.9265 117.702 91.5047 123.954 90.0284 132.533L89.6823 134.19L85.6673 160H76.3445L75.2299 167.149L74.3359 172Z' />
  </svg>
);
