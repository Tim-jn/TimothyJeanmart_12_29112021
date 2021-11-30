import { LineChart, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'

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

  const renderLineChart = (
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
      <Tooltip />
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
  return renderLineChart
}
