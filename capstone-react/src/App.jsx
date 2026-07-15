import Header from "./Components/Header/Header.jsx";
import TaskForm from "./Components/TaskForm/TaskForm.jsx";
import Board from "./Components/Board/Board.jsx"
import { useTheme } from "./hooks/useTheme.js";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
  <>
    <div className={`app ${theme}`}>

      <Header />

      <TaskForm />

      <Board />
    </div>
  </>
  );
}

export default App;