import { useState } from "react";
import Header from "./Components/Header.jsx";
import TaskForm from "./Components/TaskForm.jsx";
import Board from "./Components/board.jsx"

function App() {

  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Create UI",
      description: "Design Kanban layout",
      column: "todo"
    }
  ]);


  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" }
  ];


  const addTask = (task) => {

    setTasks([
      ...tasks,
      task
    ]);

  };


  return (
    <>
      <Header />

      <TaskForm 
        addTask={addTask}
        columns={columns}
      />

      <Board 
        tasks={tasks}
        columns={columns}
      />
    </>
  );
}

export default App;