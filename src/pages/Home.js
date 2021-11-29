import RenderBarChart from '../components/BarChart/BarChart'
import DashboardTitle from '../components/DashboardTitle/DashboardTitle'
import Header from '../components/Header/Header'
import RenderLineChart from '../components/LineChart/LineChart'
import NavLeft from '../components/NavLeft/NavLeft'

import './home.css'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="dashboard">
        <NavLeft />
        <div className="dashboardContent">
          <DashboardTitle />
          <div className="dashboardCharts">
            <div className="barChart">
              <RenderBarChart />
            </div>
            <div className="lineChart">
              <RenderLineChart />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
