import PieWrapper, { PieChartProps } from '../PieWrapper';

const Pizza = (props: PieChartProps) => {
  return <PieWrapper {...props} isDonut />;
};

export default Pizza;
