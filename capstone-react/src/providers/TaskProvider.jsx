import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskContext } from "../context/TaskContext";

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useLocalStorage("kanban-tasks",[]);
    const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" },
    { id: "inreview", title: "In Review" },
    { id: "deployed", title: "Depolyed" }];

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

        const order = columns.map(column => column.id );
        setTasks(prevTasks => prevTasks.map(task => {

            if (task.id !== id) {return task;}

            const current = order.indexOf(task.column);
            const newIndex = direction === "next"? current + 1 : current - 1;

            return {
                ...task,
                column: order[newIndex]
            }})
    )}



  return (
    <TaskContext.Provider value={{tasks, setTasks,columns, addTask, updateTask, deleteTask, moveTask}}>
      {children}
    </TaskContext.Provider>
  );
};