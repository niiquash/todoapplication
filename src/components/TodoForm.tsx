import { useState, FormEvent } from "react";

interface Props {
  singleItem: string;
  setSingleItem: (singleItem: string) => void;
  handleSubmit: (e: FormEvent) => void;
}

const TodoForm = ({ handleSubmit, setSingleItem, singleItem }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="todoItem" className="form-label">
          To-do Item
        </label>
        <input
          onChange={(e) => setSingleItem(e.target.value)}
          value={singleItem}
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
