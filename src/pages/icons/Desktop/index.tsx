import Icon, { IconProps } from '../Icon';

const Desktop = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28 36V130H164V36H28ZM26 24C20.4772 24 16 28.4772 16 34V132C16 137.523 20.4772 142 26 142H86V155.059H63.9883C60.6746 155.059 57.9883 157.745 57.9883 161.059C57.9883 164.373 60.6746 167.059 63.9883 167.059H131.988C135.302 167.059 137.988 164.373 137.988 161.059C137.988 157.745 135.302 155.059 131.988 155.059H110V142H166C171.523 142 176 137.523 176 132V34C176 28.4772 171.523 24 166 24H26Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default Desktop;
