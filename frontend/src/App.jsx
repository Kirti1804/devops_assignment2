import React, { useState, useEffect } from 'react';
import { getTasks, addTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleAddTask = (task) => {
    addTask(task).then(newTask => setTasks([...tasks, newTask]));
  };

  const handleDeleteTask = (id) => {
    deleteTask(id).then(() => setTasks(tasks.filter(task => task._id !== id)));
  };

  return (
    <div className="container">
      <h1 className="title">📝 Todo List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;