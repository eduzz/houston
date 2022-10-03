import Icon, { IconProps } from '../Icon';

const ChevronDoubleRight = (props: IconProps) => {
  return (
    <Icon {...props}>
      <g transform='rotate(-180 96 96)'>
        <path d='m106.80624,28.41659c-2.21062,-2.21062 -5.79478,-2.21069 -8.00539,-0.00015l-63.60667,63.60421c-1.06153,1.06152 -1.65801,2.50134 -1.65801,4.00256c0,1.50133 0.59632,2.94135 1.65792,4.00253l63.55568,63.55768c2.21053,2.21065 5.79452,2.21065 8.00517,0c2.21062,-2.2106 2.21062,-5.79483 0,-8.00543l-59.55309,-59.55461l59.60365,-59.60162c2.21062,-2.21054 2.21138,-5.79455 0.00075,-8.00516l0,-0.00001z' />
        <path d='m150.80623,28.41659c-2.21062,-2.21062 -5.79477,-2.21069 -8.00539,-0.00015l-63.60667,63.60421c-1.06152,1.06152 -1.65801,2.50134 -1.65801,4.00256c0,1.50133 0.59632,2.94135 1.65792,4.00253l63.55568,63.55768c2.21054,2.21065 5.79453,2.21065 8.00517,0c2.21062,-2.2106 2.21062,-5.79483 0,-8.00543l-59.55309,-59.55461l59.60364,-59.60162c2.21063,-2.21054 2.2114,-5.79455 0.00075,-8.00516l0,-0.00001z' />
      </g>
    </Icon>
  );
};

/**
 * @deprecated Use Icon from Antd
 * https://ant.design/components/icon/
 */
export default ChevronDoubleRight;
