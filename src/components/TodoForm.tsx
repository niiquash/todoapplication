import { useState } from "react";

interface Props {
  onSubmit: (task: string) => void;
}

const TodoForm = ({onSubmit}: Props) => {
  const [task, setTask] = useState("");
  return (
    <form onSubmit={() => onSubmit(task)}>
      <div className="mb-3">
        <label htmlFor="todoItem" className="form-label">
          To-do Item
        </label>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          id="todoItem"
          required
          type="text"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary mb-3">Add</button>
    </form>
  );
};

export default TodoForm;
