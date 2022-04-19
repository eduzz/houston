import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M31 167C27.6863 167 25 164.314 25 161V114.991C25 111.678 27.6863 108.991 31 108.991C34.3137 108.991 37 111.678 37 114.991V155H155V115C155 111.686 157.686 109 161 109C164.314 109 167 111.686 167 115V161.009C167 164.322 164.314 167.009 161 167.009C160.734 167.009 160.472 166.991 160.215 166.958C159.981 166.986 159.742 167 159.5 167H33.5C33.0713 167 32.6532 166.955 32.25 166.87C31.8468 166.955 31.4287 167 31 167Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M93.9854 133.514C90.6716 133.514 87.9854 131.494 87.9854 129.003V38.0254C87.9854 35.5339 90.6716 33.5142 93.9854 33.5142C97.2991 33.5142 99.9854 35.5339 99.9854 38.0254V129.003C99.9854 131.494 97.2991 133.514 93.9854 133.514Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M57.7427 58.7867C55.3996 61.1298 55.3996 64.9288 57.7427 67.2719C60.0859 69.6151 63.8848 69.6151 66.228 67.2719L95.0001 38.4999L123.257 66.7572C125.601 69.1004 129.4 69.1004 131.743 66.7572C134.086 64.4141 134.086 60.6151 131.743 58.2719L99.228 25.7572C96.8848 23.4141 93.0859 23.4141 90.7427 25.7572C90.6158 25.8841 90.4958 26.0153 90.3827 26.1502C90.3405 26.1901 90.2987 26.2306 90.2574 26.2719L57.7427 58.7867Z'
    />
  </svg>
);
