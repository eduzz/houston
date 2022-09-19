import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import { formatData } from '..';

export type BarRadius = [number, number, number, number];

export type BarType = { label: string; value: number };

export type BarDataType = { name: string; columns: BarType[] };

export type BarChartProps = {
  data: BarDataType[];
  height: number;
  width: number;
  color: { [key: string]: string };
};

const HSTBar = ({ data, color, ...rest }: BarChartProps) => {
  const barchartData = formatData(data);

  const { columns } = data[0];

  const theme = useHoustonTheme();

  const rounded = [theme.border.radius.xs, theme.border.radius.xs, theme.border.radius.none, theme.border.radius.none];
  const straight = [
    theme.border.radius.none,
    theme.border.radius.none,
    theme.border.radius.none,
    theme.border.radius.none
  ];

  const formatRadius = (data: string[]) => {
    return data.map(item => theme.cleanUnit(item)).map(item => theme.remToPx(item)) as BarRadius;
  };

  const formatMargin = (data: string) => {
    return theme.remToPx(theme.cleanUnit(data));
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        {...rest}
        data={barchartData}
        margin={{
          top: formatMargin(theme.spacing.xxxs),
          right: formatMargin(theme.spacing.xxs),
          left: formatMargin(theme.spacing.xxxs),
          bottom: formatMargin(theme.spacing.quarck)
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' fontFamily={theme.font.family.base} />
        <YAxis fontFamily={theme.font.family.base} />
        <Tooltip />
        <Legend />
        {columns.map((bar, index) => (
          <Bar
            key={`bar-${index}`}
            dataKey={bar.label}
            stackId='a'
            fill={color[bar.label]}
            radius={index === data.length - 1 ? formatRadius(rounded) : formatRadius(straight)}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HSTBar;
