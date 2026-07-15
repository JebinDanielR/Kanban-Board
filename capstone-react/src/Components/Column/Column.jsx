import Card from "../Card/Card.jsx";
import styles from "./Column.module.css";

function Column({ column, tasks }) {

  return (
    <div className={styles.column}>

      <h2>{column.title}</h2>

      {
        tasks.map(task => (
          <Card
            key={task.id}
            task={task}
          />
        ))
      }

    </div>
  );
}

export default Column;