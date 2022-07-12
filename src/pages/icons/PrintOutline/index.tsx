import Icon, { IconProps } from '../Icon';

const PrintOutline = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28 126V82H164V126H144V138H166C171.523 138 176 133.523 176 128V80C176 74.4772 171.523 70 166 70H26C20.4772 70 16 74.4772 16 80V128C16 133.523 20.4772 138 26 138H45V126H28Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M134 124H58V148H134V124ZM46 112V160H146V112H46Z'
        fill='currentColor'
      />
      <path fillRule='evenodd' clipRule='evenodd' d='M133 44H58V70H133V44ZM46 32V82H145V32H46Z' fill='currentColor' />
      <path d='M45 126H48V138H45V126Z' fill='currentColor' />
      <path d='M155 93C155 95.2091 153.209 97 151 97C148.791 97 147 95.2091 147 93C147 90.7909 148.791 89 151 89C153.209 89 155 90.7909 155 93Z' />
    </Icon>
  );
};

export default PrintOutline;
