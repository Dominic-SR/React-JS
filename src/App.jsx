import { useState } from 'react'
import './App.css'
import AppRoutes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/about" render={() => <AboutPage />} />
  </Router>
  )
}

export default App
