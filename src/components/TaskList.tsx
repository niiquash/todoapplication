import ListFilter from "./ListFilter";

interface TodoItems {
  id: number;
  task: string;
  completed: boolean;
}

interface Props {
  todoItems: TodoItems[];
  handleDelete: (id: number) => void;
}


const TaskList = ({ handleDelete, todoItems }: Props) => {
  return (
    <>
      <div className="mb-3">{todoItems.length > 0 && <ListFilter />}</div>
      <ul className="list-group">
        {todoItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between"
          >
            {item.task}
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
