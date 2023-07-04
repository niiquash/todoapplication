import React, { FormEvent } from "react";
import { useState } from "react";

interface Props {
  onSubmit: (task: string) => void;
}

const TodoForm = ({ onSubmit }: Props) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task
        </label>
        <input
          onChange={(e) => setTask(e.target.value)}
          id="task"
          type="text"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
