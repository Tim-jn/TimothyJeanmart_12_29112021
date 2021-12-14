import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'

/**
 *  * A radar chart showing user's performances, builded with recharts.
 * @param {*} props
 */

export default function RenderRadarChart(props) {
  const performance = props.performance?.data

  // The loop changes the numbers to their corresponding performance, according to the figma model
  for (let i = 0; i < performance?.length; i++) {
    performance[0].kind = 'Intensité'
    performance[1].kind = 'Vitesse'
    performance[2].kind = 'Force'
    performance[3].kind = 'Endurance'
    performance[4].kind = 'Energie'
    performance[5].kind = 'Cardio'
  }

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
