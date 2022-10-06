import Icon, { IconProps } from '../Icon';

const CursorSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28.6651 26.1163C27.0831 25.5621 25.5621 27.0831 26.1163 28.6651L63.8695 136.431C64.3567 137.822 66.1293 138.226 67.1712 137.184L88.2671 116.088L135.643 163.465C139.549 167.37 145.88 167.37 149.786 163.465L163.446 149.804C167.351 145.899 167.351 139.568 163.446 135.662L116.07 88.286L137.184 67.1713C138.226 66.1293 137.822 64.3567 136.431 63.8695L28.6651 26.1163Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default CursorSolid;
