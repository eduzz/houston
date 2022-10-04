import Icon, { IconProps } from '../Icon';

const SearchOutline = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M127.919 76C127.919 88.1977 123.719 99.4145 116.687 108.283L165 156.596C167.343 158.939 167.343 162.738 165 165.081C162.657 167.425 158.858 167.425 156.514 165.081L108.201 116.768C99.3327 123.8 88.1163 128 75.9189 128C47.2001 128 23.9189 104.719 23.9189 76C23.9189 47.2812 47.2001 24 75.9189 24C104.638 24 127.919 47.2812 127.919 76ZM75.9189 116C98.0103 116 115.919 98.0914 115.919 76C115.919 53.9086 98.0103 36 75.9189 36C53.8276 36 35.9189 53.9086 35.9189 76C35.9189 98.0914 53.8276 116 75.9189 116Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default SearchOutline;
