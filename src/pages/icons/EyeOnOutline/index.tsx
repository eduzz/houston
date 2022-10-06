import Icon, { IconProps } from '../Icon';

const EyeOnOutline = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M96 41C133.207 41 164.788 63.8231 176 95.5C164.788 127.177 133.207 150 96 150C58.7932 150 27.2123 127.177 16 95.5C27.2123 63.8231 58.7932 41 96 41ZM96 139.1C64.7317 139.1 38.3823 120.807 27.6943 95.5C38.3823 70.1927 64.7317 51.9 96 51.9C127.268 51.9 153.618 70.1927 164.306 95.5C153.618 120.807 127.268 139.1 96 139.1Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M96 114C107.046 114 116 105.046 116 94C116 82.9543 107.046 74 96 74C84.9543 74 76 82.9543 76 94C76 105.046 84.9543 114 96 114ZM96 126C113.673 126 128 111.673 128 94C128 76.3269 113.673 62 96 62C78.3269 62 64 76.3269 64 94C64 111.673 78.3269 126 96 126Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default EyeOnOutline;
