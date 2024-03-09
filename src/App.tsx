import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Rain from './Components/Rain/Rain'

function App() {

  return (
    <div className="container">
    {/* Defining routes path and rendering components as element */}
    <Routes>
      <Route path="Background-React-Ts/" element={<Home />} />
      <Route path="Background-React-Ts/rain" element={<Rain />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  </div>
  )
}

export default App
