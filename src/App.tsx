import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ListFilter from "./components/ListFilter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "build a to-do list in react",
      completed: false,
    },
    {
      id: 2,
      item: "learn sql and java",
      completed: false,
    },
    {
      id: 3,
      item: "apply to jobs at oracle",
      completed: false,
    },
    {
      id: 4,
      item: "get cloud computing certification",
      completed: false,
    },
  ]);
  const [currentListView, setCurrentListView] = useState("all");

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUncheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id && todo.completed === true
          ? { ...todo, completed: false }
          : todo
      )
    );
  };

  const handleCheck = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id && todo.completed === false
          ? { ...todo, completed: true }
          : todo
      )
    );
  };

  const onSubmit = (newTodo: string) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, item: newTodo, completed: false },
    ]);

    console.log(todos);
  };

  const completedItems = todos.filter((todo) => todo.completed === true);
  const pendingItems = todos.filter((todo) => todo.completed === false);

  let currentTodo: Array<any> = [];
  if (currentListView === "pending") {
    currentTodo = pendingItems;
  } else if (currentListView === "completed") {
    currentTodo = completedItems;
  } else {
    currentTodo = todos;
  }

  return (
    <div className="app">
      <Heading />
      <TodoForm onSubmit={onSubmit} />
      <ListFilter setCurrentListView={setCurrentListView} />
      <TodoList
        handleCheck={handleCheck}
        handleUncheck={handleUncheck}
        handleDelete={handleDelete}
        currentTodo={currentTodo}
      />
    </div>
  );
}

export default App;
