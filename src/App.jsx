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
    if(input.trim()==="") return;
    setTask((prevTask) => ({
      ...prevTask,
      todo: [...prevTask.todo, input],
    }));
    setInput("");
  };
  return <div className="App">
    <h1>TODO LIST</h1>
    <div className="addTask">    
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add A New Task"/>
      <button onClick={addTodo}>Add</button>
    </div>
    <div className="taskColumns">
      {["todo","in Progress","done","closed","review"].map((s,i)=>(
        <div className="taskColumn">
          <h2>{s.toUpperCase()}</h2>
          {
            s==="todo" && task["todo"].map((t,ti)=>(
              <Draggable>
                <div className="taskItem" key={ti}>
                  {t}
                </div>
              </Draggable>
            ))
          }
        </div>
      ))}
    </div>
  </div>;
}

export default App;
