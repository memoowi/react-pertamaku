import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Cuaca from './Pages/Cuaca'
import Portofolio from './Pages/Portofolio'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-pertamaku/" element={<Home />} />
        <Route path="/react-pertamaku/about/" element={<About />} />
        <Route path="/react-pertamaku/cuaca/" element={<Cuaca />} />
        <Route path="/react-pertamaku/portofolio/" element={<Portofolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
