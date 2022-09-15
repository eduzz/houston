import { PieChart, Pie, Cell, Tooltip } from 'recharts';

export type DonutProps = {
  data: { name: string; value: number; color: string }[];
  height: number;
  width: number;
  radius: number;
};

const Pizza = ({ data, width, height, radius }: DonutProps) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        dataKey='value'
        isAnimationActive={false}
        data={data}
        cx='50%'
        cy='50%'
        outerRadius={radius}
        innerRadius={radius / 2}
        fill='#8884d8'
        label
      >
        {data.map((item, index) => (
          <Cell key={`donut-${index}`} fill={item.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Pizza;
