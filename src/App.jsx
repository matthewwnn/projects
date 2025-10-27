import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Layout>
  )
}
