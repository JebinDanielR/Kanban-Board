import Column from "../Column/Column.jsx";
import styles from "./Board.module.css";
import {useTaskActions} from "../../hooks/useTaskactions.js";

function Board() {

  const {tasks,columns} = useTaskActions();

  return (
    <div className={styles.board}>

      {columns.map(column => (
        <Column
            key={column.id}
            column={column}
            tasks={tasks.filter(
                task=>task.column===column.id)
            }/>
      ))}

    </div>
  );
}

export default Board;