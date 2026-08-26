import React, { useReducer, useState } from "react";

// Reducer function to handle add, edit, delete
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), task: action.payload }];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, task: action.payload.newTask } : item
      );
    default:
      return state;
  }
};

function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, [
    { id: 1, task: "Working" },
    { id: 2, task: "Playing" },
  ]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (input.trim() === "") return;

    if (editId) {
      // Edit existing task
      dispatch({ type: "EDIT", payload: { id: editId, newTask: input } });
      setEditId(null);
    } else {
      // Add new task
      dispatch({ type: "ADD", payload: input });
    }

    setInput("");
  };

  const handleEdit = (task) => {
    setInput(task.task);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div
    className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      style={{
        maxWidth: "450px",
      }}
    >
      <h2 className="text-xl font-bold mb-4">📝 Task Manager</h2>


      <div className="d-flex gap-3 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          className="form-control w-75 p-2 border rounded"
        />
        <button
          onClick={handleAddOrEdit}
          className="w-25 border-0 rounded p-2 bg-primary text-white"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul className="list-none p-0">
          {tasks.map((item) => (
            <li
              key={item.id}
              className="d-flex justify-content-between align-items-center mb-2 p-2 rounded bg-light"
            >
              <span>{item.task}</span>
              <div>
                <button
                  onClick={() => handleEdit(item)}
                  className="me-2 border-0 p-2 rounded bg-warning text-dark"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="border-0 p-2 rounded bg-danger text-white"
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskApp;
