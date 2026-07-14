import Column from "../Column/Column.jsx";
import styles from "./Board.module.css";

function Board({tasks, columns, updateTask, deleteTask, moveTask}) {

  return (
    <div className={styles.board}>

      {columns.map(column => (
        <Column
            key={column.id}
            column={column}
            tasks={tasks.filter(
                task=>task.column===column.id)
            }
            updateTask={updateTask}
            deleteTask={deleteTask}
            moveTask={moveTask} />
      ))}

    </div>
  );
}

export default Board;