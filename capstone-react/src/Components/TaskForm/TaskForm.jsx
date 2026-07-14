import { useState } from "react";
import styles from "./TaskForm.module.css";


function TaskForm({ addTask, columns }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [column, setColumn] = useState("todo");

  const [error, setError] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();


    if(title.trim() === "") {
      setError("Title is required");
      return;
    }


    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      column
    };


    addTask(newTask);


    // clear form
    setTitle("");
    setDescription("");
    setColumn("todo");
    setError("");

  };


  return (

    <form onSubmit={handleSubmit} className={styles.form}>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        required
      />


      <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        required
      />


      <select
        value={column}
        onChange={(e)=>setColumn(e.target.value)}
        required
      >

        {
          columns.map(col => (
            <option 
              key={col.id}
              value={col.id}
            >
              {col.title}
            </option>
          ))
        }

      </select>


      <button type="submit">
        Add Card
      </button>


      {
        error && <p>{error}</p>
      }


    </form>

  );

}

export default TaskForm;