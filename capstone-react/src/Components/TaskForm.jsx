function TaskForm(){

  return(
    <div className="task-form">

      <input 
        placeholder="Task title"
      />

      <textarea
        placeholder="Task description"
      />

      <button>
        Add Task
      </button>

    </div>
  );

}

export default TaskForm;