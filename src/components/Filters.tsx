import React, { useState } from "react";

import "../styles/Filters.css"; 
import { useAppSelector } from "../hook";

const Filters: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const todos = useAppSelector((state) => state.todos.todos);

  const filteredTodos = todos.filter((todo) =>
    filter === "all" ? true : filter === "completed" ? todo.completed : !todo.completed
  );

  return (
    <div className="filters-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
          Completed
        </button>
        <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>
          Pending
        </button>
      </div>

      {/* Grid Layout for Cards */}
      <div className="todo-grid">
        {filteredTodos.map((todo: any) => (
          <div key={todo.id} className={`todo-card ${todo.completed ? "completed" : "pending"}`}>
            <h4>{todo.title}</h4>
            <p>Status: <strong>{todo.completed ? "Completed" : "Pending"}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
