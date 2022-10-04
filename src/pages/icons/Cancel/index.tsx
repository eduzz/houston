import Icon, { IconProps } from '../Icon';

const Cancel = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M48.9779 38.7574C46.6348 36.4142 42.8358 36.4142 40.4926 38.7574C38.1495 41.1005 38.1495 44.8995 40.4926 47.2426L87.515 94.265L38.7574 143.023C36.4142 145.366 36.4142 149.165 38.7574 151.508C41.1005 153.851 44.8995 153.851 47.2426 151.508L96.0002 102.75L144.543 151.293C146.886 153.636 150.685 153.636 153.028 151.293C155.372 148.95 155.372 145.151 153.028 142.808L104.486 94.265L151.293 47.4574C153.636 45.1142 153.636 41.3152 151.293 38.9721C148.95 36.629 145.151 36.629 142.808 38.9721L96.0002 85.7797L48.9779 38.7574Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default Cancel;
