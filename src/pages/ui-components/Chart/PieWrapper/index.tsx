import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

export type PieChartData = { name: string; value: number; color?: string };

export type PieChartProps = {
  data: PieChartData[];
  height: number;
  width: number;
  radius: number;
  isDonut?: boolean;
};

const PieWrapper = ({ data, width, height, radius, isDonut }: PieChartProps) => {
  const theme = useHoustonTheme();
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={width} height={height}>
        <Pie
          dataKey='value'
          isAnimationActive={false}
          data={data}
          cx='50%'
          cy='50%'
          outerRadius={radius}
          innerRadius={isDonut ? radius / 2 : 0}
          fill={theme.brandColor.primary.medium}
          label
        >
          {data.map((item, index) => (
            <Cell key={`donut-${index}`} fill={item.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieWrapper;
