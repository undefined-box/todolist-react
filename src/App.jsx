import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TaskContainer from "./components/TaskContainer";

function App() {
  const [list, setList] = useState([]);

  function addTask(ev) {
    ev.preventDefault();
    if (ev.target[0].value !== "") {
      let input = ev.target[0];
      let task = {
        name: input.value,
        id: input.value + Date.now(),
        isCompleted: false,
      };
      setList([...list, task]);
      input.value = "";
    }
  }

  function completeTask(ev) {
    let el = ev.target;
    let listEl = list.find((item) => item.id === el.id);
    listEl.isCompleted = true;

    if (el.className === "task") {
      el.className = "task completed";
    } else {
      el.className = "task";
      let listEl = list.find((item) => item.name === el.textContent);
    listEl.isCompleted = false;
    }
  }

  function clearCompleted(){
    let incompleteTasks = list.filter((item)=> item.isCompleted === false)
    console.log(incompleteTasks)
    setList(incompleteTasks)
  }

  let containerSource = list;

  return (
    <div className="App">
      <h1>To-do list V2.1.3</h1>
      <Form handleSubmit={addTask} />
      <TaskContainer source={containerSource} callback={completeTask} />
      <button className="btn" onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}

export default App;
