import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import nestedComponent from '../utils/nestedComponent';
import Bar from './Bar';
import Donut from './Donut';
import Line from './Line';
import type { PieChartProps } from './PieWrapper';
import Pizza from './Pizza';

export type ColumnsData = { label: string; value: number };

export type { PieChartProps };

export type ColumnChartData = { name: string; columns: ColumnsData[] };

export type ChartWrapperProps = {
  data: ColumnChartData[];
  height: number;
  width: number;
  color: { [key: string]: string };
};

export const formatData = (data: ColumnChartData[]) => {
  return data.map((item: ColumnChartData) => {
    const data = item.columns.map((bar: ColumnsData) => ({ [bar.label]: bar.value }));

    return Object.assign({}, { name: item.name }, ...data);
  });
};

export const useFormatMargin = (data: string) => {
  const theme = useHoustonTheme();
  return theme.remToPx(theme.cleanUnit(data));
};

const Chart = (props: ChartWrapperProps) => <Bar {...props} />;

export default nestedComponent(Chart, {
  Bar,
  Line,
  Donut,
  Pizza
});
