import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export type LineType = { label: string; value: number };

export type LineDataType = { name: string; lines: LineType[] };

export type LineProps = {
  data: LineDataType[];
  height: number;
  width: number;
  color: { [key: string]: string };
};

const HSTLine = ({ data, color, height, width }: LineProps) => {
  const lineChartData = data.map((item: { lines: LineType[]; name: string }) => {
    const lines = item.lines.map((line: { label: string; value: number }) => ({ [line.label]: line.value }));

    return Object.assign({}, { name: item.name }, ...lines);
  });

  const { lines } = data[0];

  return (
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
      {lines.map((line, index) => (
        <Line
          key={`line-${index}`}
          type='linear'
          dataKey={line.label}
          stroke={color[line.label]}
          activeDot={{ r: 8 }}
        />
      ))}
    </LineChart>
  );
};

export default HSTLine;
