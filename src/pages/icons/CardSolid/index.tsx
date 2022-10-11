import Icon, { IconProps } from '../Icon';

const CardSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        d='M16 84H176V149C176 154.523 171.523 159 166 159H26C20.4772 159 16 154.523 16 149V84Z'
        fill='currentColor'
      />
      <path d='M16 42C16 36.4772 20.4772 32 26 32H166C171.523 32 176 36.4772 176 42V64H16V42Z' fill='currentColor' />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default CardSolid;
