import Icon, { IconProps } from '../Icon';

const Telegram = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M96 184C144.601 184 184 144.601 184 96C184 47.3989 144.601 8 96 8C47.3989 8 8 47.3989 8 96C8 144.601 47.3989 184 96 184Z'
        fill='url(#paint0_linear)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M77.9911 131.401C75.1402 131.401 75.6247 130.325 74.6414 127.61L66.2578 100.019L130.791 61.7344'
        fill='#C8DAEA'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M77.9922 131.404C80.1922 131.404 81.1642 130.397 82.3922 129.204L94.1255 117.794L79.4897 108.969'
        fill='#A9C9DD'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M79.4889 108.968L114.953 135.17C119 137.403 121.921 136.247 122.929 131.413L137.364 63.3863C138.842 57.4608 135.106 54.7733 131.234 56.531L46.4681 89.2164C40.682 91.5372 40.7157 94.7652 45.4134 96.2036L67.1663 102.993L117.526 71.2213C119.904 69.7797 122.086 70.5547 120.295 72.1442'
        fill='url(#paint1_linear)'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='74.0088'
          y1='15.3392'
          x2='30.0088'
          y2='118'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#37AEE2' />
          <stop offset='1' stopColor='#1E96C8' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='83.1101'
          y1='96.4734'
          x2='92.5128'
          y2='126.888'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#EFF7FC' />
          <stop offset='1' stopColor='white' />
        </linearGradient>
      </defs>
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default Telegram;
