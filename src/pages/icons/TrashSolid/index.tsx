import Icon, { IconProps } from '../Icon';

const TrashSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M76.5 16C71.8056 16 68 19.8056 68 24.5V27H40C35.5817 27 32 30.5817 32 35C32 39.4183 35.5817 43 40 43H152C156.418 43 160 39.4183 160 35C160 30.5817 156.418 27 152 27H125V24.5C125 19.8056 121.194 16 116.5 16H76.5Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M47 55.083C46.6748 55.0284 46.3407 55 46 55C42.6863 55 40 57.6863 40 61V62.0583V65.1333V166C40 171.523 44.4772 176 50 176H141C146.523 176 151 171.523 151 166V65.1333V62.0583V61C151 57.6863 148.314 55 145 55H47V55.083Z'
      />
    </Icon>
  );
};

export default TrashSolid;
