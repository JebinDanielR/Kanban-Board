import { useState } from "react";
import Header from "./Components/Header.jsx";
import TaskForm from "./Components/TaskForm.jsx";
import Board from "./Components/board.jsx";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Create UI",
      description: "Design Kanban layout",
      column: "todo"
    },
    {
      id: crypto.randomUUID(),
      title: "Build Components",
      description: "Create React components",
      column: "inprogress"
    },
    {
      id: crypto.randomUUID(),
      title: "Testing",
      description: "Test application",
      column: "done"
    }
  ]);

  const columns = [
    {
      id: "todo",
      title: "To Do"
    },
    {
      id: "inprogress",
      title: "In Progress"
    },
    {
      id: "done",
      title: "Done"
    }
  ];


  return (
    <>
      <Header />

      <TaskForm />

      <Board 
        tasks={tasks}
        columns={columns}
      />
    </>
  );
}

export default App;