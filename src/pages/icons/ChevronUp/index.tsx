import Icon, { IconProps } from '../Icon';

const ChevronUp = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g transform='rotate(-180 96 96)'>
        <path d='m56.7847,82.43299c-2.22424,-2.22424 -2.22424,-5.83064 0,-8.05493c2.2243,-2.22424 5.83068,-2.22424 8.05491,0l31.16135,31.16138l31.15903,-31.16046c2.22436,-2.22435 5.83085,-2.22435 8.0552,-0.00011c2.22437,2.22424 2.22437,5.83063 0,8.05486l-35.18665,35.18806c-1.06812,1.06818 -2.51686,1.66832 -4.02744,1.66832c-1.51067,0 -2.95939,-0.60002 -4.02753,-1.66827l-35.18888,-35.18886l0.00001,0z' />
      </g>
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default ChevronUp;
