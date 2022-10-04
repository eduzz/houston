import Icon, { IconProps } from '../Icon';

const DotsHorizontal = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path d='m82,96c0,-8.00813 6.26801,-14.5 14,-14.5c7.7322,0 14,6.49187 14,14.5c0,8.00835 -6.2678,14.5 -14,14.5c-7.73199,0 -14,-6.49165 -14,-14.5z' />
      <path d='m139,96c0,-8.00813 6.26801,-14.5 14,-14.5c7.73219,0 14,6.49187 14,14.5c0,8.00835 -6.26781,14.5 -14,14.5c-7.73199,0 -14,-6.49165 -14,-14.5z' />
      <path d='m25,96c0,-8.00813 6.26801,-14.5 14,-14.5c7.73219,0 14,6.49187 14,14.5c0,8.00835 -6.26781,14.5 -14,14.5c-7.73199,0 -14,-6.49165 -14,-14.5z' />
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default DotsHorizontal;
