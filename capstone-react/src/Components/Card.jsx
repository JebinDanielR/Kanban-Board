import { useState } from "react";

function Card({ task }) {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

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
          </>
        )
      }

    </div>
  );
}

export default Card;