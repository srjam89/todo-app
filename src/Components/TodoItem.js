import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, toggleComplete, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(todo.task);

  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  const handleEdit = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, newName);
    setEdit(false);
  };

  const editTemplate = (
    <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
      <input
        onChange={handleEdit}
        value={newName}
        name="task"
        type="text"
        id={todo.id}
        autoComplete="off"
      />
      <button onClick={() => setEdit(false)} type="button">
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  const viewTemplate = (
    <div>
      <div className="input-container" style={{ display: "flex" }}>
        <input type="checkbox" onClick={handleCheckboxClick} />
        <li
          style={{
            color: "black",
            textAlign: "center",
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          {todo.task}
        </li>
        <button onClick={() => setEdit(true)} className="edit-task-btn">
          Edit
        </button>
        <button className="remove-btn" onClick={handleRemoveClick}>
          X
        </button>
      </div>
      <div>
        <hr></hr>
      </div>
    </div>
  );

  return <div className="todo">{edit ? editTemplate : viewTemplate}</div>;
};

export default TodoItem;
