import Icon, { IconProps } from '../Icon';

const LockedOpenSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M97 28H96C79.9837 28 67 40.9837 67 57V77H124H126H138H144H150C155.523 77 160 81.4771 160 87V166C160 171.523 155.523 176 150 176H42C36.4772 176 32 171.523 32 166V87C32 81.4771 36.4772 77 42 77H55V57C55 34.3563 73.3563 16 96 16H97C119.644 16 138 34.3563 138 57V64H126V57C126 40.9837 113.016 28 97 28ZM100 128.93C102.242 127.633 103.796 125.28 103.981 122.551C103.994 122.369 104 122.185 104 122C104 117.582 100.418 114 96 114C91.5817 114 88 117.582 88 122V122.008C88.003 124.966 89.611 127.548 92 128.93V138H100V128.93Z'
      />
      <rect x='126' y='59' rx='5' fill='currentColor' />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default LockedOpenSolid;
