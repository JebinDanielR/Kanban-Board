import Header from "./Components/Header.jsx";
import TaskForm from "./Components/TaskForm.jsx";
import Board from "./Components/board.jsx"
import { useTheme } from "./hooks/useTheme.js";
import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { theme } = useTheme();

  const [tasks, setTasks] = useLocalStorage(
  "kanban-tasks",
  []
);

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

  const moveTask = (id, direction) => {

    const order = ["todo", "inprogress", "done"];

    setTasks(prevTasks =>
    prevTasks.map(task => {

      if (task.id !== id) {
        return task;
      }

      const current = order.indexOf(task.column);

      const newIndex = direction === "next"? current + 1 : current - 1;

      return {
        ...task,
        column: order[newIndex]
      };

    })
  );

  };

  return (<>
  <div className={`app ${theme}`}>
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
        moveTask={moveTask}
      />
      </div>
    </>
  );
}

export default App;