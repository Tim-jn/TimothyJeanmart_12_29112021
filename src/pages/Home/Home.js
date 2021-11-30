import RenderBarChart from '../../components/BarChart/BarChart'
import DashboardTitle from '../../components/DashboardTitle/DashboardTitle'
import Header from '../../components/Header/Header'
import RenderLineChart from '../../components/LineChart/LineChart'
import NavLeft from '../../components/NavLeft/NavLeft'
import RenderRadialBarChart from '../../components/RadialBarChart/RadialBarChart'
import RenderRadarChart from '../../components/RadarChart/RadarChart'
import MacronutrientsBox from '../../components/MacronutrientsBox/MacronutrientsBox'
import caloriesIcon from './Icons/calories-icon.svg'
import proteinIcon from './Icons/protein-icon.svg'
import carbsIcon from './Icons/carbs-icon.svg'
import fatIcon from './Icons/fat-icon.svg'
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
          <div className="dashboardChartsAndBoxes">
            <div className="dashboardCharts">
              <div className="barChart">
                <RenderBarChart />
              </div>
              <div className="bottomSmallCharts">
                <div className="lineChart">
                  <RenderLineChart />
                </div>
                <div className="radarChart">
                  <RenderRadarChart />
                </div>
                <div className="radialBarChart">
                  <RenderRadialBarChart />
                </div>
              </div>
            </div>
            <div className="macronutrientsBoxes">
              <MacronutrientsBox image={caloriesIcon} macroCount="1,930kCal" macroName="Calories" />
              <MacronutrientsBox image={proteinIcon}  macroCount="155g" macroName="Protéines"/>
              <MacronutrientsBox image={carbsIcon}  macroCount="290g" macroName="Glucides"/>
              <MacronutrientsBox image={fatIcon}  macroCount="50g" macroName="Lipides"/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
