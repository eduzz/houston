import Icon, { IconProps } from '../Icon';

const DotsVertical = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d='M96 168C84.9543 168 76 159.046 76 148C76 136.954 84.9543 128 96 128C107.046 128 116 136.954 116 148C116 159.046 107.046 168 96 168Z' />
      <path d='M96 116C84.9543 116 76 107.046 76 96C76 84.9543 84.9543 76 96 76C107.046 76 116 84.9543 116 96C116 107.046 107.046 116 96 116Z' />
      <path d='M96 64C84.9543 64 76 55.0457 76 44C76 32.9543 84.9543 24 96 24C107.046 24 116 32.9543 116 44C116 55.0457 107.046 64 96 64Z' />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default DotsVertical;
