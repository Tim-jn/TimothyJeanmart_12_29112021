import { LineChart, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import CustomTooltip from './CustomTooltip'

export default function RenderLineChart(props) {
  for (let i = 0; i < props.session?.length; i++) {
    props.session[0].day = 'L'
    props.session[1].day = 'M'
    props.session[2].day = 'M'
    props.session[3].day = 'J'
    props.session[4].day = 'V'
    props.session[5].day = 'S'
    props.session[6].day = 'D'
  }

  return (
    <LineChart
      width={258}
      height={263}
      data={props.session}
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
        content={<CustomTooltip />}
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
