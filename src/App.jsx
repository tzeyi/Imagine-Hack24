import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Register from './pages/Register'
import BuildProfile from './pages/startup/BuildProfile'
import Questions from './pages/startup/Questions'
import Discover from './pages/vc/Discover'
import Interested from './pages/vc/Interested'


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/build' element={<BuildProfile />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/interested' element={<Interested />} />
      </Routes>
    </div>
  )
}

export default App
