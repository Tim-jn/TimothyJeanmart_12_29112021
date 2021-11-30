import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip'

export default function RenderBarChart() {
  const data = [
    {
      day: '2020-07-01',
      kilogram: 80,
      calories: 240,
    },
    {
      day: '2020-07-02',
      kilogram: 80,
      calories: 220,
    },
    {
      day: '2020-07-03',
      kilogram: 81,
      calories: 280,
    },
    {
      day: '2020-07-04',
      kilogram: 81,
      calories: 290,
    },
    {
      day: '2020-07-05',
      kilogram: 80,
      calories: 160,
    },
    {
      day: '2020-07-06',
      kilogram: 78,
      calories: 162,
    },
    {
      day: '2020-07-07',
      kilogram: 76,
      calories: 390,
    },
  ]

  for (let i = 0; i < data.length; i++) {
    data[0].day = 1
    data[1].day = 2
    data[2].day = 3
    data[3].day = 4
    data[4].day = 5
    data[5].day = 6
    data[6].day = 7
  }

  return (
    <ResponsiveContainer width="100%" height={272}>
      <BarChart data={data} barCategoryGap="27" barGap="8">
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="day" tickMargin="15" />
        <YAxis
          orientation="right"
          axisLine={false}
          tickMargin="30"
          domain={[0, 400]}
          ticks={[0, 200, 400]}
        />
        <Tooltip content={<CustomTooltip kilogram={10} calories={200} />} />
        <Legend
          width="277"
          iconType="circle"
          align="right"
          verticalAlign="top"
          iconSize="8"
          wrapperStyle={{
            padding: '0 0 50px 0',
          }}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
          barSize={7}
          type="date"
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
          barSize={7}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
