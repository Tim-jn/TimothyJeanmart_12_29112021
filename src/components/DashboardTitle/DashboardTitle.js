import './dashboardTitle.css'

export default function DashboardTitle() {
  let user = 'Antoine'
  return (
    <div className="dashboardTitle">
      <h1 className="user">
        Bonjour <span>{user}</span>
      </h1>
      <h2 className="userText">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  )
}
