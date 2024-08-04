import React, { useState } from "react";
import "./Task.css"; // Import the CSS file

const Task = ({ task, updateTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask(task.id, { ...task, title, description });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-header" onClick={() => setIsEditing(!isEditing)}>
        <h3>{task.title}</h3>
        <button className="toggle-button">
          {isEditing ? "-" : "+"}
        </button>
      </div>
      {isEditing && (
        <div className="task-content">
          <p>{task.description}</p>
          <p>Last Updated: {new Date(task.timestamp).toLocaleString()}</p>
          <button
            className="complete-button"
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.completed ? "Mark as Undone" : "Mark as Done"}
          </button>
          <div className="edit-section">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="update-button" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
