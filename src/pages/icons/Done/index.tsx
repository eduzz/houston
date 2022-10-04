import Icon, { IconProps } from '../Icon';

const Done = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M81.4748 135.595C81.4129 135.663 81.3492 135.729 81.2836 135.795C78.9405 138.138 75.1415 138.138 72.7983 135.795L37.7574 100.754C35.4142 98.4108 35.4142 94.6118 37.7574 92.2687C40.1005 89.9255 43.8995 89.9255 46.2426 92.2687L77.3195 123.346L144.908 55.7574C147.251 53.4142 151.05 53.4142 153.393 55.7574C155.736 58.1005 155.736 61.8995 153.393 64.2426L83.2845 134.351C82.7463 134.889 82.1313 135.304 81.4748 135.595Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default Done;
