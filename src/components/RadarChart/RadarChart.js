import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
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
    <ResponsiveContainer height="100%" width="100%">
      <RadarChart outerRadius={80} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" stroke="#FFF" fontSize="12px" />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar dataKey="value" fill="#FF0101B2" />
      </RadarChart>
    </ResponsiveContainer>
  )
  return renderRadarChart
}
