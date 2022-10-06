import Icon, { IconProps } from '../Icon';

const InstagramSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M53 24C36.9837 24 24 36.9837 24 53V139C24 155.016 36.9837 168 53 168H139C155.016 168 168 155.016 168 139V53C168 36.9837 155.016 24 139 24H53ZM96 128C113.673 128 128 113.673 128 96C128 78.3269 113.673 64 96 64C78.3269 64 64 78.3269 64 96C64 113.673 78.3269 128 96 128ZM144 58.5C144 64.299 139.299 69 133.5 69C127.701 69 123 64.299 123 58.5C123 52.701 127.701 48 133.5 48C139.299 48 144 52.701 144 58.5ZM96 117C107.598 117 117 107.598 117 96C117 84.402 107.598 75 96 75C84.402 75 75 84.402 75 96C75 107.598 84.402 117 96 117Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default InstagramSolid;
