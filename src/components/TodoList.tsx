import React, {useEffect } from "react";


import { fetchTodos } from "../store/todoSlice";


import TodoItem from "./TodoItem";
import { useAppDispatch, useAppSelector } from "../hook";

const TodoList: React.FC = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.todos.todos);
  
    useEffect(() => {
      if (!todos.length) {
        dispatch(fetchTodos());
      }
    }, [dispatch, todos.length]);
  
    return (
      <ul className="list-group">
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  };
  
  export default TodoList;