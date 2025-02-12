import React, { useState } from "react";

import { addTodo } from "../store/todoSlice";
import { useAppDispatch } from "../hook";

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-primary ms-2" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
