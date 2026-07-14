import Column from "./Column.jsx";

function Board({tasks, columns, updateTask, deleteTask, moveTask}) {

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
            deleteTask={deleteTask}
            moveTask={moveTask} />
      ))}

    </div>
  );
}

export default Board;