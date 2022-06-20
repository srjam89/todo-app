import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, toggleComplete, removeTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
