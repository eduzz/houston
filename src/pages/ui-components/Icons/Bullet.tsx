import BaseIcon, { BaseIconProps } from './Base';

const IconBullet = ({ ...props }: BaseIconProps) => (
  <BaseIcon {...props}>
    <path d='M128 96C128 78.3269 113.673 64 96 64C78.3269 64 64 78.3269 64 96C64 113.673 78.3269 128 96 128C113.673 128 128 113.673 128 96Z' />
  </BaseIcon>
);

export default IconBullet;
