import Card from './Components/state/Card'
import Counter from './Components/state/Counter'
import UseEffectCounter from './Components/effect/UseEffectCounter'
import GithubUsers from './Components/effect/GithubUsers'
import Timer from "./Components/effect/Timer"
import ButtonClickCount from "./Components/callback/ButtonClickCounter"
import TaskApp from './Components/reducer/TaskApp'
import TaskManagement from './Components/reducer/TaskManagement'
import SortingMemo from './Components/memo/sortingmemo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import LoginForm from './Components/ref/LoginForm'
import Students from './Components/useContext/StudentDetails/Students'


function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />

    {/* UseState */}
    <Route path="/usestate_counter" element={<Counter />} />
    <Route path="/usestate_addtocard" element={<Card/>} />

    {/* UseReducer */}
    <Route path="/usereducer_taskmanagement" element={<TaskManagement />} />

    {/* UseEffect */}
    <Route path="/useeffect_timer" element={<Timer/>} />
    <Route path="/useeffect_counter" element={<UseEffectCounter />} />
    <Route path="/useeffect_githubusers" element={<GithubUsers/>} />

    <Route path="/useref_loginform" element={<LoginForm />} />

    <Route path="/students_details" element={<Students/>} />

    <Route path="/usecallback_buttonclickmount" element={<ButtonClickCount/>} />
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
