import React from "react";

const ListFilter = () => {
  return (
    <div className="d-flex justify-content-end">
      <button className="btn btn-primary">All tasks</button>
      <button className="btn btn-danger ms-2">Pending</button>
      <button className="btn btn-secondary ms-2">Archived</button>
    </div>
  );
};

export default ListFilter;
