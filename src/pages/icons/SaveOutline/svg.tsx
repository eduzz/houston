import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M112.201 24H34C28.4772 24 24 28.4771 24 34V158C24 163.523 28.4771 168 34 168H158C163.523 168 168 163.523 168 158V79.799L156 67.799V156H36V36H124.201L112.201 24Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M131.243 25.7574C133.586 23.4142 137.385 23.4142 139.728 25.7574L166.243 52.2721C168.586 54.6152 168.586 58.4142 166.243 60.7573C163.9 63.1005 160.101 63.1005 157.757 60.7573L131.243 34.2426C128.9 31.8995 128.9 28.1005 131.243 25.7574Z'
    />
    <path d='M111 24H136V36H111V24Z' fill='currentColor' />
    <path fillRule='evenodd' clipRule='evenodd' d='M135 25H112V35H135V25ZM111 24V36H136V24H111Z' fill='currentColor' />
    <path d='M156 57H168V81H156V57Z' fill='currentColor' />
    <path d='M62 36C62 32.6863 64.6863 30 68 30H123C126.314 30 129 32.6863 129 36V58C129 61.3137 126.314 64 123 64H68C64.6863 64 62 61.3137 62 58V36Z' />
    <path d='M56 118C56 114.686 58.6863 112 62 112H130C133.314 112 136 114.686 136 118V154C136 157.314 133.314 160 130 160H62C58.6863 160 56 157.314 56 154V118Z' />
  </svg>
);
