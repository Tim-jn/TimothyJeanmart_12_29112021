import './customTooltip.css'

export default function CustomTooltip(props) {
  return (
    <div className="customTooltipActivity">
      <p className="labelActivity">{`${props.kilogram} kg`}</p>
      <p className="labelActivity">{`${props.calories} kCal`}</p>
    </div>
  )
}
