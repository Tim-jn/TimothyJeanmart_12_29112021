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

export default function RenderBarChart(props) {
  for (let i = 0; i < props.activity?.length; i++) {
    props.activity[0].day = 1
    props.activity[1].day = 2
    props.activity[2].day = 3
    props.activity[3].day = 4
    props.activity[4].day = 5
    props.activity[5].day = 6
    props.activity[6].day = 7
  }

  return (
    <ResponsiveContainer width="100%" height={272}>
      <BarChart data={props.activity} barCategoryGap="27" barGap="8">
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
