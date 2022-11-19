// import React from 'react';

import "./App.css";
import logo from "./logo.svg";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Task } from "./interfaces/Task";
import { useState } from "react";

interface Props {
  title?: string;
}

export function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Task one",
      description: "Task description",
      completed: false,
    },
  ]);

  // To generate a random id based in getCurrentTimestamp, sometimes is better to try with uuid for production and SQL databases when it is obligatory)
  const getCurrentTimestamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrentTimestamp(), completed: false}]);

  // Filter to return a new array
  const deleteTask = (id: number) => setTasks (tasks.filter(task => task.id !== id));

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              src={logo}
              alt="Create react app logo"
              className="App-logo"
              />
            {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>

      <main className="containe p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
