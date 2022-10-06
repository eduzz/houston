import Icon, { IconProps } from '../Icon';

const ChevronRight = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g transform='rotate(-180 96 96)'>
        <path d='m121.80624,28.41659c-2.21062,-2.21062 -5.79478,-2.21069 -8.0054,-0.00015l-63.60667,63.60421c-1.06153,1.06152 -1.65801,2.50134 -1.65801,4.00257c0,1.50132 0.59632,2.94135 1.65792,4.00252l63.55568,63.55768c2.21054,2.21065 5.79452,2.21065 8.00517,0c2.21062,-2.2106 2.21062,-5.79483 0,-8.00543l-59.55309,-59.55461l59.60365,-59.60162c2.21062,-2.21054 2.21138,-5.79455 0.00075,-8.00516z' />
      </g>
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default ChevronRight;
