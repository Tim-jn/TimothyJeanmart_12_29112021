import './customTooltip.css'

export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipLength">
        <p className="labelLenght">{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}