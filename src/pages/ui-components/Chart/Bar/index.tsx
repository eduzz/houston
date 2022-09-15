import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export type BarType = { label: string; value: number };

export type BarDataType = { name: string; bars: BarType[] };

export type BarChartProps = {
  data: BarDataType[];
  height: number;
  width: number;
  color: { [key: string]: string };
};

const HSTBar = ({ data, color, ...rest }: BarChartProps) => {
  const barchartData = data.map((item: BarDataType) => {
    const bars = item.bars.map((bar: BarType) => ({ [bar.label]: bar.value }));

    return Object.assign({}, { name: item.name }, ...bars);
  });

  const { bars } = data[0];

  return (
    <BarChart
      {...rest}
      data={barchartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      {bars.map((bar, index) => (
        <Bar
          key={`bar-${index}`}
          dataKey={bar.label}
          stackId='a'
          fill={color[bar.label]}
          radius={index === bars.length - 1 ? [5, 5, 0, 0] : [0, 0, 0, 0]}
        />
      ))}
    </BarChart>
  );
};

export default HSTBar;
