const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </div>
  );
};

export default Task;
