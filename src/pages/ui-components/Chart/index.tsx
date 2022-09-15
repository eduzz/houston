import nestedComponent from '../utils/nestedComponent';
import Bar, { BarChartProps } from './Bar';
import Donut from './Donut';
import Line from './Line';
import Pizza from './Pizza';

const Chart = (props: BarChartProps) => <Bar {...props} />;

export default nestedComponent(Chart, {
  Bar,
  Line,
  Donut,
  Pizza
});
