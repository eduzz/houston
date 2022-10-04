import Icon, { IconProps } from '../Icon';

const CursorOutline = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M88.2671 99.1178L142.715 153.565L153.546 142.733L99.099 88.286L117.45 69.935L44.3134 44.3134L69.935 117.45L88.2671 99.1178ZM67.1712 137.184C66.1293 138.226 64.3567 137.822 63.8695 136.431L26.1163 28.6651C25.5621 27.0831 27.0831 25.5621 28.6651 26.1163L136.431 63.8695C137.822 64.3567 138.226 66.1293 137.184 67.1713L116.07 88.286L163.446 135.662C167.351 139.568 167.351 145.899 163.446 149.804L149.786 163.465C145.88 167.37 139.549 167.37 135.643 163.465L88.2671 116.088L67.1712 137.184Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default CursorOutline;
