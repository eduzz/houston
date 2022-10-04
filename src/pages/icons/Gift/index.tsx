import Icon, { IconProps } from '../Icon';

const Gift = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36 88V156H156V88H36ZM34 76C28.4772 76 24 80.4772 24 86V158C24 163.523 28.4771 168 34 168H158C163.523 168 168 163.523 168 158V86C168 80.4772 163.523 76 158 76H34Z'
      />
      <path d='M84 88H108V164H84V88Z' fill='currentColor' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M63.3274 64C50.444 64 40 53.2653 40 40.0234C40 17.1201 68.2556 7.25481 81.8283 25.4194L96 44.3856L110.172 25.4194C123.744 7.25483 152 17.1201 152 40.0234C152 53.2653 141.556 64 128.673 64H63.3274ZM105.691 51.6661L119.689 32.932C126.28 24.1115 140 28.902 140 40.0234C140 46.4535 134.929 51.6661 128.673 51.6661H105.691ZM86.3094 51.6661H63.3274C57.0715 51.6661 52 46.4535 52 40.0234C52 28.9019 65.7205 24.1115 72.3111 32.9319L86.3094 51.6661Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default Gift;
