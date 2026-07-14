import Card from "../Card/Card.jsx";
import styles from "./Column.module.css";

function Column({column,tasks,updateTask,deleteTask, moveTask}) {

  return (
    <div className={styles.column}>

      <h2>{column.title}</h2>

      {
        tasks.map(task=>(
            <Card
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
            />
        ))
      }

    </div>
  );
}

export default Column;