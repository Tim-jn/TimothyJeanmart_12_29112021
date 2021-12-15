import { LineChart, XAxis, YAxis, Legend, Line, Tooltip } from 'recharts'
import CustomTooltip from './CustomTooltip'
import PropTypes from 'prop-types'

/**
 * A line chart showing user's average session, builded with recharts.
 * @Component
 * @param {*} props
 */

export default function RenderLineChart(props) {
  // The loop changes the dates in days of week to match with the figma model
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
      margin={{ top: 0, right: 20, left: 20, bottom: 5 }}
    >
      <XAxis
        dataKey="day"
        axisLine={false}
        stroke="#FFF"
        opacity="0.5"
        tickLine={false}
        type="category"
      />
      <YAxis
        hide={true}
        domain={['dataMin -3', 'dataMax']}
        tickLine={false}
        type="number"
      />
      <Legend
        align="left"
        verticalAlign="top"
        iconSize="0"
        wrapperStyle={{
          padding: '29px 0 10px 10px',
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
        type="monotone"
        dataKey="sessionLength"
        stroke="#FFF"
        dot={false}
        activeDot={{ r: 3 }}
        strokeWidth="2px"
      />
    </LineChart>
  )
}

RenderLineChart.propTypes = {
  session: PropTypes.array,
}
