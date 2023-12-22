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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cuaca" element={<Cuaca />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
