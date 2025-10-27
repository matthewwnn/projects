import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Calculator from './pages/Calculator.jsx'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, Arial', padding: 20 }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 15 }}>Home</Link>
        <Link to="/calculator">Calculator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  )
}
