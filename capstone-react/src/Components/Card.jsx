function Card({ task }) {

  return (
    <div className="card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

    </div>
  );
}

export default Card;