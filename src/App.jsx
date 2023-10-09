import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Game, Portfolio, Home } from './components'
import './App.css'
import './index.css'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/portfolio-vite/' element={<Home />} />
        <Route path='/portfolio-vite/game' element={<Game/>}/>
        <Route path='/portfolio-vite/portfolio' element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
