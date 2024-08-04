import React, { useState, useEffect } from "react";
import Task from "./Task";
import SearchBar from "./SearchBar";
import "./TaskList.css"; // Import the CSS file
import tasksData from "../data/tasks.json";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
      timestamp: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-list">
      <SearchBar setSearchTerm={setSearchTerm} />
      <button
        className="add-task-button"
        onClick={() => addTask("New Task", "Task Description")}
      >
        Add Task
      </button>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;
