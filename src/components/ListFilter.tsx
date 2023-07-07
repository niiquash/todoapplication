import React from 'react'

interface Props {
    setCurrentListView: (anythingHere: string) => void;
}

const ListFilter = ({ setCurrentListView }: Props) => {
  return (
    <div className="filter-btns">
      <button
        onClick={() => setCurrentListView("completed")}
        className="btn btn-success"
      >
        Completed
      </button>
      <button
        onClick={() => setCurrentListView("pending")}
        className="btn btn-danger"
      >
        Pending
      </button>
    </div>
  );
};

export default ListFilter
