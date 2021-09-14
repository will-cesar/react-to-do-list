import React, { useState } from "react";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}></Tasks>
      </div>
    </>
  );
};

export default App;
