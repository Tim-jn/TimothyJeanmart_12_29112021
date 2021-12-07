import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import './radialBarChart.css'

export default function RenderRadialBarChart(props) {
  const data = [
    {
      todayScore: props.score,
    },
  ]

  return (
    <div className="radialBarChart">
      <div className="radialBarChartScore">{props.score}%</div>
      <div className="radialBarChartScoreText">
        de votre<br></br>objectif
      </div>

      <ResponsiveContainer height="100%" width="100%">
        <RadialBarChart
          innerRadius={105}
          outerRadius={90}
          data={data}
          startAngle={-270}
          endAngle={90}
        >
          <PolarAngleAxis
            domain={[0, 100]}
            tick={false}
            type="number"
            angleAxisId={0}
          />
          <RadialBar
            clockWise={false}
            dataKey="todayScore"
            fill="#FF0000"
            background
            cornerRadius={10}
          />
          <Tooltip />
          <text
            x={50}
            y={35}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Score
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
