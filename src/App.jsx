import { useState } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div>
        <div className="Addtask">
          <input onChange={handleChange} type="text" />
          <button>Complete</button>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="List">
          {todoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                completed={task.completed}
                id={task.id}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
