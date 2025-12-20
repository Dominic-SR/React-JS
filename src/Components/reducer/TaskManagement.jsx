import React, { useReducer, useState } from "react";

// Reducer function to handle add, edit, delete
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), task: action.payload }];
    case "DELETE":
      return state.filter((t) => t.id !== action.payload);
    case "EDIT":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, task: action.payload.newTask } : t
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
      style={{
        padding: "20px",
        maxWidth: "450px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>📝 Task Manager</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          style={{
            padding: "8px",
            width: "70%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddOrEdit}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t) => (
            <li
              key={t.id}
              style={{
                marginBottom: "10px",
                background: "#f9f9f9",
                padding: "8px 12px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{t.task}</span>
              <div>
                <button
                  onClick={() => handleEdit(t)}
                  style={{
                    marginRight: "8px",
                    background: "#ffc107",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  style={{
                    background: "#dc3545",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    color: "white",
                    cursor: "pointer",
                  }}
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
