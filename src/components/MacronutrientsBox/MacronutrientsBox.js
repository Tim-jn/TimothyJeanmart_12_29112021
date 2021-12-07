import './macronutrientsBox.css'

/**
 * A small card/box that shows the user's macronutrients
 * @param {*} props
 * @returns { HTMLElement }
 */

export default function MacronutrientsBox(props) {
  return (
    <div className="macronutrientBox">
      <img src={props.image} alt="Macronutrients Icon" />
      <div className="macronutrientText">
        <h3>{props.macroCount}</h3>
        <p>{props.macroName}</p>
      </div>
    </div>
  )
}
