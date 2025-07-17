import React, { useContext, useState, useRef } from 'react';
import { TaskContext } from './TaskApp';

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext); // ✅ Correct way
  const [newTask, setNewTask] = useState('');
  const inoutRef = useRef(null)
  const addTask = () => {
    if (newTask.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setNewTask('');
    inoutRef.current.focus();
  };

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL_TASK'});
  };

  return (
    <div>
      <h3>Add a Task</h3>
      <input
        type="text"
        value={newTask}
        ref={inoutRef}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button className="btn btn-info mx-2" onClick={addTask}>
        Add a Task
      </button>
      

      <h3 className='mt-4'>Task List</h3>
      {state.map((task) => (
        <div key={task.id} className="col-6 w-75 d-flex gap-5 my-3">
          <span className='fw-bold border-bottom'>{task.task}</span>
          <button className="btn btn-sm btn-danger mx-2" onClick={() => removeTask(task.id)}>
            Remove
          </button>
        </div>
      ))}

      <button className="btn btn-danger mt-2" onClick={removeAll}>
        Remove All
      </button>
    </div>
  );
};

export default TaskList;
