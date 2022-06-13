import IconButton, { IIconButtonProps } from '../IconButton';

export interface IButtonIcon extends IIconButtonProps {}

/**
 * @deprecated Migrar para IconButton
 */
const ButtonIcon = (props: IButtonIcon) => {
  return <IconButton {...props} />;
};

export default ButtonIcon;
