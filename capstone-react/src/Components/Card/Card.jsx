import { useState } from "react";
import styles from "./Card.module.css";

function Card({task,updateTask,deleteTask,moveTask}) {

  const [editMode, setEditMode] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const [error, setError] = useState("");


  const saveEdit = () => {

    if(!title.trim() || !description.trim()) {
      setError("Title and description are required");
      return;
    }

    updateTask({
      ...task,
      title,
      description
    });

  setError("");
  setEditMode(false);

  };

  const cancelEdit = () => {

    setTitle(task.title);
    setDescription(task.description);

    setEditMode(false);

  };


  return (

    <div className={styles.card}>


      {/* Previous Column */}

   {task.column !== "todo" && (
      <button className={styles.leftArrow} onClick={() => moveTask(task.id, "previous")}>‹</button>
    )}


      <div className={styles.content}>


        {
          editMode ? (

            <div className={styles.editForm}>

              <input value={title} onChange={(e)=>setTitle(e.target.value)}/>

              <textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
              
              {error && <p className={styles.error}>{error}</p>}

              <div className={styles.editActions}>

                <button onClick={cancelEdit}>Cancel</button>

                <button onClick={saveEdit}>Save</button>

              </div>

            </div>

          ) : (
            <>

              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <div className={styles.actions}>

                <button onClick={() => setEditMode(true)}>Edit</button>

                <button onClick={() => deleteTask(task.id)}>Delete</button>

              </div>

            </>

          )
        }

      </div>

      {/* Next Column */}

      {task.column !== "done" && (
        <button className={styles.rightArrow} onClick={() => moveTask(task.id, "next")}>›</button>
      )}

    </div>

  );

}


export default Card;