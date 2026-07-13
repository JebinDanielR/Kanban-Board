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
    { id: "done", title: "Done" }];

  const addTask = (task) => {
    setTasks([
      ...tasks,
      task
    ])}

  const updateTask = (updatedTask)=>{
    setTasks(
      tasks.map(task =>
        task.id === updatedTask.id
        ? updatedTask
        : task)
    )}

    const deleteTask = (id)=>{
      setTasks(
        tasks.filter(task => task.id !== id)
    )}

  return (<>
      <Header />

      <TaskForm 
        addTask={addTask}
        columns={columns}
      />

      <Board
        tasks={tasks}
        columns={columns}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;