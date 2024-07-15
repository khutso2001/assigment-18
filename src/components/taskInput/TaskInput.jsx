import React, { useState } from "react";
import "./TaskInput.css";

function TaskInput({ submit }) {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      submit(task);
      setTask("");
    }
  };

  return (
    <div className="TaskInput">
      <h1>Enter The Task:</h1>
      <form onSubmit={onSubmit} className="input">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskInput;
