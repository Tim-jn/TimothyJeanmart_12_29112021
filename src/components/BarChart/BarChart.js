import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts'

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

  return (
    <BarChart
      data={data}
      barCategoryGap="27"
      barGap="8"
      name="asdffd"
      height={270}
      width={835}
    >
      <CartesianGrid strokeDasharray="3" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis
        orientation="right"
        axisLine={false}
        tickMargin="30"
        domain={[0, 400]}
        ticks={[0, 200, 400]}
      />
      <Tooltip />
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
  )
}
