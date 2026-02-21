import Card from './Components/useState/Card/Card'
import Counter from './Components/useState/Counter/Counter'
import UseEffectCounter from './Components/useEffect/Counter/UseEffectCounter'
import GithubUsers from './Components/useEffect/GithubUsers/GithubUsers'
import Timer from "./Components/useEffect/Timer/Timer"
import MemroizesFunction from './Components/useCallback/MemoizesFunction/MemoizesFunction'
import TaskApp from './Components/useReducer/TaskManagement/TaskApp'
import TaskManagement from './Components/useReducer/TaskManagement/TaskManagement'
import SortingMemo from './Components/useMemo/SortingMemo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import LoginForm from './Components/useRef/LoginForm/LoginForm'
import AutoFocusInput from './Components/useRef/AutoFocusInput/AutoFocusInput'
import Students from './Components/useContext/StudentDetails/Students'
import WithoutTransition from './Components/useTransition/withoutTeansition/WithoutTransition'
import UseTransition from './Components/useTransition/useTreansition/UseTransition'


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

    {/* UseEffect */}
    <Route path="/useref_loginform" element={<LoginForm />} />
    <Route path="/useref_autofocusinput" element={<AutoFocusInput />} />


    <Route path="/students_details" element={<Students/>} />

    <Route path="/usecallback_memroizesfunction" element={<MemroizesFunction/>} />

    <Route path="/usetransition_without_transition" element={<WithoutTransition />} />
    <Route path="/usetransition_use_transition" element={<UseTransition />} />
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
