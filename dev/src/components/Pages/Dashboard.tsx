import React, { Fragment, memo, useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import Toolbar from 'components/Layout/Toolbar';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: 15
  }
});

const DashboardIndexPage = memo((props: {}) => {
  const classes = useStyles(props);
  const [data] = useState([
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
  ]);

  const [dataPie] = useState([
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ]);

  const [colors] = useState(['#0088FE', '#00C49F', '#FFBB28', '#FF8042']);

  return (
    <Fragment>
      <Toolbar title='Dashboard' />

      <Grid container spacing={3} className={classes.marginBottom}>
        <Grid item xs={12} md={4} lg={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                Bar Chart
              </Typography>

              <ResponsiveContainer width='100%' height={150}>
                <BarChart data={data}>
                  <Tooltip />
                  <Bar dataKey='uv' fill={colors[0]} />
                  <Bar dataKey='pv' fill={colors[1]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                Pie Chart
              </Typography>

              <ResponsiveContainer width='100%' height={150}>
                <PieChart>
                  <Pie dataKey={'value'} data={dataPie}>
                    <Tooltip />
                    {data.map((entry, index) => (
                      <Cell key={entry.name} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                Area Chart
              </Typography>

              <ResponsiveContainer width='100%' height={150}>
                <AreaChart data={data}>
                  <Area type='monotone' dataKey='uv' stroke='#FF8042' fill='#FF8042' />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Line Chart
          </Typography>

          <ResponsiveContainer width='100%' height={200}>
            <LineChart data={data}>
              <Tooltip />
              <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Fragment>
  );
});

export default DashboardIndexPage;
