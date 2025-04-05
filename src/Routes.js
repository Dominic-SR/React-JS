import React from 'react'
import { BrowserRouter, Routes,Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import useState from './pages/Hooks/UseState/UseState'

const AppRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default AppRoutes