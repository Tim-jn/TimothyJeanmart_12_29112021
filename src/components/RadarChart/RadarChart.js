import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 *  * A radar chart showing user's performances, builded with recharts.
 * @Component
 * @param {*} props
 */

export default function RenderRadarChart(props) {
  const [performance, setPerformance] = useState()

  useEffect(() => {
    setPerformance(props.performance?.data)
  }, [props.performance?.data])

  // The loop changes the numbers to their corresponding performance, according to the figma model
  // for (let i = 0; i < performance?.length; i++) {
  // performance.kind[] = performance?.data[i].kind
  // }

  // let kindArray = [
  //   'Intensité',
  //   'Vitesse',
  //   'Force',
  //   'Endurance',
  //   'Energie',
  //   'Cardio',
  // ]

  // for (let i = 0; i < performance?.length; i++) {
  //   performance[i].kind = kindArray
  // }

  console.log(performance)
  // performance.kind = kind[data[i].kind]

  return (
    <ResponsiveContainer height="100%" width="100%">
      <RadarChart outerRadius={80} data={performance}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          stroke="#FFF"
          fontSize="12px"
          tickLine={false}
          dataKey="kind"
          dy={4}
        />
        <PolarRadiusAxis axisLine={false} tick={false} domain={[0, 200]} />
        <Radar fill="#FF0101B2" dataKey="value" />
      </RadarChart>
    </ResponsiveContainer>
  )
}

RenderRadarChart.propTypes = {
  performance: PropTypes.object,
}
