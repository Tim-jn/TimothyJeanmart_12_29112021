import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import './App.css'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/user/:id" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
