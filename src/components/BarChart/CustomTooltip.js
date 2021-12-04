import './customTooltip.css'

export default function CustomTooltip(props) {
  return (
    <div className="customTooltipActivity">
      <p className="labelActivity">{`${props} kg`}</p>
      <p className="labelActivity">{`${props} kCal`}</p>
    </div>
  )
}
