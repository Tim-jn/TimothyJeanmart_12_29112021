import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import './App.css'
import Index from './pages/Index/Index.js'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/user/:id" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
