import Icon, { IconProps } from '../Icon';

const SearchSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M128 76C128 88.1977 123.8 99.4145 116.768 108.283L165.081 156.596C167.424 158.939 167.424 162.738 165.081 165.081C162.738 167.425 158.939 167.425 156.595 165.081L108.282 116.768C99.4138 123.8 88.1973 128 76 128C47.2812 128 24 104.719 24 76C24 47.2812 47.2812 24 76 24C104.719 24 128 47.2812 128 76Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default SearchSolid;
