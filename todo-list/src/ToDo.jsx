import { useState } from "react";
import styles from "./Todo.module.css";   // <-- ADD THIS

export const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const HandleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const AddTask = () => {
    if (newTask.trim() !== "") setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const DeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className={styles.container}>   {/* <-- APPLY CSS CLASS */}
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="enter task"
          value={newTask}
          onChange={HandleInputChange}
        />
        <button className="add-button" onClick={AddTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>

            <button
              className="Delete-butotn"
              onClick={() => DeleteTask(index)}
            >
              over
            </button>

            <button
              className="moveup-butotn"
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>

            <button
              className="movedown-butotn"
              onClick={() => moveTaskDown(index)}
            >
              down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
