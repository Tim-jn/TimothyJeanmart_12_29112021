import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

export default function RenderRadarChart(props) {
  for (let i = 0; i < props.performance?.length; i++) {
    props.performance.data[0].kind = 'Cardio'
    props.performance.data[1].kind = 'Energie'
    props.performance.data[2].kind = 'Endurance'
    props.performance.data[3].kind = 'Force'
    props.performance.data[4].kind = 'Vitesse'
    props.performance.data[5].kind = 'Intensité'
  }
  return (
    <ResponsiveContainer height="100%" width="100%">
      <RadarChart outerRadius={80} data={props.performance?.data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke="#FFF" fontSize="12px" />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Tooltip />
        <Radar dataKey="value" fill="#FF0101B2" />
      </RadarChart>
    </ResponsiveContainer>
  )
}
