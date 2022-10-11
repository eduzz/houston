import Icon, { IconProps } from '../Icon';

const PrintSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M29 126V82H165V126H145V138H167C172.523 138 177 133.523 177 128V80C177 74.4772 172.523 70 167 70H27C21.4772 70 17 74.4772 17 80V128C17 133.523 21.4772 138 27 138H46V126H29Z'
      />
      <path d='M57 112H137V160H57V112Z' fill='currentColor' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M125 124H69V148H125V124ZM57 112V160H137V112H57Z'
        fill='currentColor'
      />
      <path d='M47 32H146V64H47V32Z' fill='currentColor' />
      <path fillRule='evenodd' clipRule='evenodd' d='M134 44H59V52H134V44ZM47 32V64H146V32H47Z' fill='currentColor' />
      <path d='M46 126H49V138H46V126Z' fill='currentColor' />
      <path d='M22 72H49V132H22V72Z' fill='currentColor' />
      <path d='M35 72H167V104H35V72Z' fill='currentColor' />
      <path d='M145 99H167V132H145V99Z' fill='currentColor' />
      <path
        d='M163 86C163 88.2091 161.209 90 159 90C156.791 90 155 88.2091 155 86C155 83.7909 156.791 82 159 82C161.209 82 163 83.7909 163 86Z'
        fill='white'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default PrintSolid;
