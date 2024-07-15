import React, { useState } from "react";
import "./ToDo.css";

function ToDo({ getTask, allTask, toggleComplete, editTask }) {
  const [editMode, setEditMode] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleEdit = (id, task) => {
    setEditMode(id);
    setNewTask(task);
  };

  const handleSave = (id) => {
    editTask(id, newTask);
    setEditMode(null);
    setNewTask("");
  };

  return (
    <div className="ToDo">
      <h1>Task List</h1>
      <div className="tasksHeader">
        <h2>All Tasks</h2>
      </div>

      <div className="tasksContainer">
        <div className="allTaskContainer">
          {allTask.map((task) => (
            <div
              key={task.id}
              style={{
                border: "1px solid brown",
                padding: "15px",
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {editMode === task.id ? (
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              ) : (
                task.task
              )}
              <button onClick={() => toggleComplete(task.id)}>
                {task.isCompleted ? "Undo" : "Complete"}
              </button>
              {editMode === task.id ? (
                <button onClick={() => handleSave(task.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(task.id, task.task)}>
                  Edit
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
