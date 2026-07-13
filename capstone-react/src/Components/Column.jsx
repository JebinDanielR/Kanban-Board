import Card from "./Card.jsx";

function Column({ column, tasks }) {

  return (
    <div className="column">

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