import { LineChart, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import CustomTooltip from './CustomTooltip'

export default function RenderLineChart() {
  const data = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ]

  for (let i = 0; i < data.length; i++) {
    data[0].day = 'L'
    data[1].day = 'M'
    data[2].day = 'M'
    data[3].day = 'J'
    data[4].day = 'V'
    data[5].day = 'S'
    data[6].day = 'D'
  }

  return (
    <LineChart
      width={258}
      height={263}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="day" axisLine={false} stroke="#FFF" opacity="0.5" />
      <YAxis hide={true} domain={[-20, 60]} />
      <Legend
        align="left"
        verticalAlign="top"
        iconSize="0"
        wrapperStyle={{
          padding: '29px 0 0 10px',
          opacity: '50%',
          lineHeight: '24px',
          fontSize: '17px',
        }}
      />
      <Tooltip
        content={<CustomTooltip sessionLength={10} />}
        cursor={{
          stroke: 'black',
          strokeOpacity: 0.1,
          strokeWidth: 30,
          fill: 'rgba(255, 255, 255, 0.1)',
        }}
      />
      <Line
        name="Durée moyenne des sessions"
        type="basis"
        dataKey="sessionLength"
        stroke="#FFF"
        dot={false}
        activeDot={{ r: 3 }}
        strokeWidth="2px"
      />
    </LineChart>
  )
}
