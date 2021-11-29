import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'

export default function RenderRadarChart() {
  const data = [
    {
      value: 90,
      kind: 'intensity',
    },
    {
      value: 200,
      kind: 'speed',
    },
    {
      value: 50,
      kind: 'strength',
    },
    {
      value: 140,
      kind: 'endurance',
    },
    {
      value: 120,
      kind: 'energy',
    },
    {
      value: 80,
      kind: 'cardio',
    },
  ]

  const renderRadarChart = (
    <RadarChart outerRadius={80} width={258} height={263} data={data}>
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" stroke="#FFF" fontSize="12px" />
      <PolarRadiusAxis axisLine={false} tick={false} />
      <Radar dataKey="value" fill="#FF0101B2" />
    </RadarChart>
  )
  return renderRadarChart
}
