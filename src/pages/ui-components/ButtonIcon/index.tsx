import IconButton, { IconButtonProps } from '../IconButton';

export interface ButtonIcon extends IconButtonProps {}

/**
 * @deprecated Migrar para IconButton
 */
const ButtonIcon = (props: ButtonIcon) => {
  return <IconButton {...props} />;
};

export default ButtonIcon;
