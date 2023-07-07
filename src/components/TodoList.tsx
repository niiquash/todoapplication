import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

interface Todo {
  id: number;
  item: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleUncheck: (id: number) => void;
  handleCheck: (id: number) => void;
}

const TodoList = ({ handleCheck, handleDelete, handleUncheck, todos }: Props) => {
  return (
    <ul className="list-group">
      {todos &&
        todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item  d-flex justify-content-between"
          >
            {todo.item}
            <div className="list-controls">
              {todo.completed ? (
                <MdOutlineCheckBox
                  onClick={() => handleUncheck(todo.id)}
                  size={20}
                  color="green"
                />
              ) : (
                <MdOutlineCheckBoxOutlineBlank
                  onClick={() => handleCheck(todo.id)}
                  size={20}
                />
              )}
              <RiDeleteBin6Line
                onClick={() => handleDelete(todo.id)}
                color="red"
                size={20}
              />
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
