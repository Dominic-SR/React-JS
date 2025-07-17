import React,{createContext, useReducer} from 'react'
import TaskList from './TaskList';
import taskReducer from './Reduce';

export const TaskContext = createContext();

const oldTask =[
    {id:1, task:"Working"},
    {id:2, task:"Playing"}
]

const TaskApp = () => {
    
const [state, dispatch] = useReducer(taskReducer, oldTask);
  return (
        <TaskContext.Provider value={{state, dispatch}}>
    {console.log("ssss", state)}
    
            <div className='container m-5'>
                <h2 className='fw-bold'>Task Management App</h2>
                <br />
                <TaskList />    
            </div>
        </TaskContext.Provider>
  )
}

export default TaskApp