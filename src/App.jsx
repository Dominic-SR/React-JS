import Card from './Components/state/Card'
import Counter from './Components/state/Counter'
import UseEffectExample from './Components/effect/useEffectExample'
import GithubUsers from './Components/effect/GithubUsers'
import Timer from "./Components/effect/Timer"
import ButtonClickCount from "./Components/callback/ButtonClickCounter"
import TaskApp from './Components/reducer/TaskApp'
import TaskManagement from './Components/reducer/TaskManagement'
import SortingMemo from './Components/memo/sortingmemo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'


function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/usestate_counter" element={<Counter />} />
    <Route path="/usestate_addtocard" element={<Card/>} />

    <Route path="/usereducer_taskmanagement" element={<TaskManagement />} />

    <Route path="/useeffect_timer" element={<Timer/>} />
  </Routes>
  </BrowserRouter>  
  //UseState
  // <Card />
  // <Counter />
  // useReducer
  // <OnlyUseReduser /> 
  //useCallback
  // <ButtonClickCount /> 
  //--UseState--//
  // <Counter />
  //  <Card />
  //--UseEffect--//
  //  <Timer />
  // <SortingMemo />
  //  <TaskApp />
  // <Home />
  // <Timer />
  // <GithubUsers />
  // <UseEffectExample />
  
  )
}

export default App
