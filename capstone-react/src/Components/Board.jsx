import Column from "./Column.jsx";

function Board({ tasks, columns }) {

  return (
    <div className="board">

      {columns.map(column => (
        <Column
          key={column.id}
          column={column}
          tasks={
            tasks.filter(
              task => task.column === column.id
            )
          }
        />
      ))}

    </div>
  );
}

export default Board;