import './customTooltip.css'

export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipActivity">
        <p className="labelActivity">{`${payload[0].value} kg`}</p>
        <p className="labelActivity">{`${payload[1].value} kCal`}</p>
      </div>
    )
  }
  return null
}
