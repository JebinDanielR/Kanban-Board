import { useState } from "react";

function Card({task,updateTask,deleteTask,moveTask}) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const handleSave = () => {
            updateTask({
              ...task,
              title,
              description
            });
            setIsEditing(false);
        };

  const handleCancel = () => {
            setTitle(task.title);
            setDescription(task.description);
            setIsEditing(false);
        };

  return (
    <div className="card">
      {!isEditing && (<>
        {task.column !== "todo" && (<button onClick={() => moveTask(task.id, "previous")}>← Previous</button>)}
        {task.column !== "done" && (<button onClick={() => moveTask(task.id, "next")}>Next →</button>)}
      </>
      )}

      {isEditing ? (<>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
        ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
        )
      }

    </div>
  );
}

export default Card;