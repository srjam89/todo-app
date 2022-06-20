import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim().length > 0) {
      addTodo({ ...todo, id: uuidv4() });
      // reset taks input
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
