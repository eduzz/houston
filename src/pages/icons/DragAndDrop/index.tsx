import Icon, { IconProps } from '../Icon';

const DragAndDrop = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d='M24 47C24 43.6863 27.1196 41 30.9677 41H161.032C164.88 41 168 43.6863 168 47C168 50.3137 164.88 53 161.032 53H30.9677C27.1196 53 24 50.3137 24 47Z' />
      <path d='M24 96C24 92.6863 27.1196 90 30.9677 90H161.032C164.88 90 168 92.6863 168 96C168 99.3137 164.88 102 161.032 102H30.9677C27.1196 102 24 99.3137 24 96Z' />
      <path d='M30.9677 139C27.1196 139 24 141.686 24 145C24 148.314 27.1196 151 30.9677 151H161.032C164.88 151 168 148.314 168 145C168 141.686 164.88 139 161.032 139H30.9677Z' />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default DragAndDrop;
