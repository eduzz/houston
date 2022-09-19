import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { formatData } from '..';

export type LineType = { label: string; value: number };

export type LineDataType = { name: string; columns: LineType[] };

export type LineProps = {
  data: LineDataType[];
  height: number;
  width: number;
  color: { [key: string]: string };
};

const HSTLine = ({ data, color, height, width }: LineProps) => {
  const lineChartData = formatData(data);

  const { columns } = data[0];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        height={height}
        width={width}
        data={lineChartData}
        margin={{
          top: 5,
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
        {columns.map((line, index) => (
          <Line
            key={`line-${index}`}
            type='linear'
            dataKey={line.label}
            stroke={color[line.label]}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HSTLine;
