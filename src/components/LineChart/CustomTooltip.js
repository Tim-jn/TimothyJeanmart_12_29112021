import './customTooltip.css'

export default function CustomTooltip(props) {
  return (
    <div className="customTooltipLength">
      <p className="labelLenght">{`${props.sessionLength} min`}</p>
    </div>
  )
}
