import React from "react";
import { useAppDispatch } from "../hook";
import { toggleComplete, deleteTodo } from "../store/todoSlice";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
        onClick={() => dispatch(toggleComplete(todo.id))}
      >
        {todo.title}
      </span>
      <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
