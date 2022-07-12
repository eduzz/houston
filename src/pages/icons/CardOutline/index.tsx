import Icon, { IconProps } from '../Icon';

const CardOutline = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28 65V44H164V65H28ZM28 85V148H164V85H28ZM16 42C16 36.4772 20.4772 32 26 32H166C171.523 32 176 36.4772 176 42V150C176 155.523 171.523 160 166 160H26C20.4772 160 16 155.523 16 150V42Z'
      />
    </Icon>
  );
};

export default CardOutline;
