import { useState } from "react";

function Card({task,updateTask,deleteTask}) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const handleSave = ()=>{
            updateTask({
            ...task,
            title,
            description
            });
            setIsEditing(false);
        };

  return (
    <div className="card">

      {
        isEditing ? (
          <form>
            <input
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}/>

            <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}/>

            <button type="button">
              Save
            </button>
          </form>
          ) :(
          <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={()=>deleteTask(task.id)}>Delete</button>
          </>
        )
      }

    </div>
  );
}

export default Card;