import './dashboardTitle.css'

export default function DashboardTitle(props) {
  return (
    <div className="dashboardTitle">
      <h1 className="user">
        Bonjour <span>{props.userName}</span>
      </h1>
      <h2 className="userText">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}
