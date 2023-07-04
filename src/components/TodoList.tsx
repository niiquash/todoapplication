import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Todo {
  id: number;
  item: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  handleDelete: (id: number) => void;
}

const TodoList = ({ handleDelete, todos }: Props) => {
  return (
    <ul className="list-group">
      {todos &&
        todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item  d-flex justify-content-between"
          >
            {todo.item}
            <RiDeleteBin6Line
              onClick={() => handleDelete(todo.id)}
              color="red"
              size={20}
            />
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
