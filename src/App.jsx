import React from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";
function App() {
  const [task, setTask] = useState({
    todo: [],
    inProgress: [],
    done: [],
    closed: [],
    review: [],
  });
  const [input, setInput] = useState("");
  const addTodo = () => {
    setTask((prevTask) => ({
      ...prevTask,
      todo: [...prevTask.todo, input],
    }));
    setInput("");
  };
  return <div>App</div>;
}

export default App;
