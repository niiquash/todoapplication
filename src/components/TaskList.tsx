import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  items: string[];
  handleDelete: (item: string) => void;
}

const TaskList = ({ handleDelete, items }: Props) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item}
          className="list-group-item d-flex justify-content-between"
        >
          {item}
          <button
            className="btn btn-outline-danger"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
