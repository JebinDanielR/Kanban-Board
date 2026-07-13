import Column from "./Column.jsx";

function Board({tasks, columns, updateTask, deleteTask}) {

  return (
    <div className="board">

      {columns.map(column => (
        <Column
            key={column.id}
            column={column}
            tasks={tasks.filter(
                task=>task.column===column.id)
            }
            updateTask={updateTask}
            deleteTask={deleteTask}/>
      ))}

    </div>
  );
}

export default Board;