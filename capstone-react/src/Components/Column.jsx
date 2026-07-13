import Card from "./Card.jsx";

function Column({column,tasks,updateTask,deleteTask}) {

  return (
    <div className="column">

      <h2>{column.title}</h2>

      {
        tasks.map(task=>(
            <Card
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
        ))
      }

    </div>
  );
}

export default Column;