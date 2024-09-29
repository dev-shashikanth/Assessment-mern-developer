import React from "react";

const TodoListItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoListItem;
