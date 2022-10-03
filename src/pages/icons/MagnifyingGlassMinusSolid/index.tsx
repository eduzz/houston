import Icon, { IconProps } from '../Icon';

const MagnifyingGlassMinusSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M116.768 108.283C123.8 99.4145 128 88.1977 128 76C128 47.2812 104.719 24 76 24C47.2812 24 24 47.2812 24 76C24 104.719 47.2812 128 76 128C88.1973 128 99.4138 123.8 108.282 116.768L156.595 165.081C158.939 167.425 162.738 167.425 165.081 165.081C167.424 162.738 167.424 158.939 165.081 156.596L116.768 108.283ZM58 70C54.6863 70 52 72.6863 52 76C52 79.3137 54.6863 82 58 82C80.6656 82 74.9723 82 94 82C97.3137 82 100 79.3137 100 76C100 72.6863 97.3137 70 94 70C74.9586 70 80.6853 70 58 70Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default MagnifyingGlassMinusSolid;
