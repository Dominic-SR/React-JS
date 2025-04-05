import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React JS</h1>
      <h3>Hooks</h3>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useCallback</li>
        <li>useMemo</li>
        <li>useRef</li>
      </ul>
    </>
  )
}

export default App
