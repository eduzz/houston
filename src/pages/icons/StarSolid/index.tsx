import Icon, { IconProps } from '../Icon';

const StarSolid = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d='M88.3996 28.4186C90.9975 22.5271 99.0025 22.5271 101.6 28.4186L117.392 64.231C118.451 66.6321 120.627 68.2854 123.137 68.5967L160.578 73.2402C166.738 74.0042 169.211 81.9676 164.658 86.3727L136.976 113.149C135.12 114.945 134.289 117.62 134.782 120.213L142.13 158.896C143.339 165.259 136.863 170.181 131.45 167.012L98.5503 147.748C96.3445 146.457 93.6555 146.457 91.4496 147.748L58.5497 167.012C53.1373 170.181 46.6612 165.259 47.87 158.896L55.218 120.213C55.7107 117.62 54.8797 114.945 53.0238 113.149L25.3425 86.3727C20.7886 81.9676 23.2623 74.0042 29.4217 73.2402L66.863 68.5967C69.3734 68.2854 71.5488 66.6321 72.6076 64.231L88.3996 28.4186Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M95 43.1919L83.5875 69.0727C80.903 75.1604 75.2291 79.6511 68.34 80.5055L40.1508 84.0015L61.367 104.524C66.2055 109.205 68.2338 115.996 67.0072 122.453L61.514 151.371L85.3864 137.393C91.3371 133.909 98.6629 133.909 104.614 137.393L128.486 151.371L122.993 122.453C121.766 115.996 123.795 109.205 128.633 104.524L149.849 84.0015L121.66 80.5055C114.771 79.6511 109.097 75.1604 106.413 69.0727L95 43.1919ZM101.6 28.4186C99.0025 22.5271 90.9975 22.5271 88.3996 28.4186L72.6076 64.231C71.5488 66.6321 69.3734 68.2854 66.863 68.5967L29.4217 73.2402C23.2623 74.0042 20.7886 81.9676 25.3425 86.3727L53.0238 113.149C54.8797 114.945 55.7107 117.62 55.218 120.213L47.87 158.896C46.6612 165.259 53.1373 170.181 58.5497 167.012L91.4496 147.748C93.6555 146.457 96.3445 146.457 98.5503 147.748L131.45 167.012C136.863 170.181 143.339 165.259 142.13 158.896L134.782 120.213C134.289 117.62 135.12 114.945 136.976 113.149L164.658 86.3727C169.211 81.9676 166.738 74.0042 160.578 73.2402L123.137 68.5967C120.627 68.2854 118.451 66.6321 117.392 64.231L101.6 28.4186Z'
      />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default StarSolid;
