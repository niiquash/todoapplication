import React from "react";

const TodoForm = () => {

    

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task
        </label>
        <input id="task" type="text" className="form-control mb-3" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default TodoForm;
