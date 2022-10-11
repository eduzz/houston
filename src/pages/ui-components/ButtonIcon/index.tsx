import IconButton, { IconButtonProps } from '../IconButton';

export interface ButtonIcon extends IconButtonProps {}
const ButtonIcon = (props: ButtonIcon) => {
  return <IconButton {...props} />;
};

/**
 * @deprecated Use Button with icon prop from Antd
 * https://ant.design/components/button/
 */
export default ButtonIcon;
