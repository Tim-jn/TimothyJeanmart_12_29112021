// Components
import RenderBarChart from '../../components/BarChart/BarChart'
import DashboardTitle from '../../components/DashboardTitle/DashboardTitle'
import Header from '../../components/Header/Header'
import RenderLineChart from '../../components/LineChart/LineChart'
import NavLeft from '../../components/NavLeft/NavLeft'
import RenderRadialBarChart from '../../components/RadialBarChart/RadialBarChart'
import RenderRadarChart from '../../components/RadarChart/RadarChart'
import MacronutrientsBox from '../../components/MacronutrientsBox/MacronutrientsBox'

// Icons for cards/boxes
import caloriesIcon from './Icons/calories-icon.svg'
import proteinIcon from './Icons/protein-icon.svg'
import carbsIcon from './Icons/carbs-icon.svg'
import fatIcon from './Icons/fat-icon.svg'

// Datas
import GetUsersData from '../../data/Data'

// Css
import './home.css'

export default function Home() {
  const usersData = GetUsersData() // Includes id, user infos, score and keyData (macronutrients boxes)

  return (
    <>
      <header>
        <Header />
      </header>
      <section className="dashboard">
        <NavLeft />
        <div className="dashboardContent">
          <DashboardTitle userName={usersData?.userInfos.firstName} />
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
                  <RenderRadialBarChart
                    score={(usersData?.todayScore || usersData?.score) * 100}
                  />
                </div>
              </div>
            </div>
            <div className="macronutrientsBoxes">
              <MacronutrientsBox
                image={caloriesIcon}
                macroCount={usersData?.keyData.calorieCount}
                macroName="Calories"
              />
              <MacronutrientsBox
                image={proteinIcon}
                macroCount={usersData?.keyData.proteinCount}
                macroName="Protéines"
              />
              <MacronutrientsBox
                image={carbsIcon}
                macroCount={usersData?.keyData.carbohydrateCount}
                macroName="Glucides"
              />
              <MacronutrientsBox
                image={fatIcon}
                macroCount={usersData?.keyData.lipidCount}
                macroName="Lipides"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
