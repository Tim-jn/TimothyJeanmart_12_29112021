import {
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import CustomTooltip from './CustomTooltip'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

/**
 * A line chart showing user's average session, builded with recharts.
 * @Component
 * @param {*} props
 */

export default function RenderLineChart(props) {
  const [data, setData] = useState()

  useEffect(() => {
    setData(props.session)
  }, [props.session])

  // The loop changes the dates in days of week to match with the figma model
  for (let i = 0; i < data?.length; i++) {
    data[i].day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  }

  return (
    <ResponsiveContainer width={258} height={263}>
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 4.5,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="day"
          axisLine={false}
          tick={{ fontSize: 12 }}
          stroke="#FFF"
          opacity="0.5"
          tickLine={false}
          type="category"
        />
        <YAxis
          hide={true}
          domain={['dataMin -20', 'dataMax +50']}
          tickLine={false}
          type="number"
        />
        <Legend
          align="left"
          verticalAlign="top"
          iconSize="0"
          wrapperStyle={{
            padding: '20px 0 10px 20px',
            opacity: '50%',
            lineHeight: '24px',
            fontSize: '17px',
            width: '200px',
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            strokeWidth: 0,
          }}
        />
        <Line
          padding={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          name=" "
          type="natural"
          dataKey="sessionLength"
          stroke="#FFF"
          dot={false}
          activeDot={{ r: 3 }}
          strokeWidth="2px"
          opacity={0.9}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

RenderLineChart.propTypes = {
  session: PropTypes.array,
}
