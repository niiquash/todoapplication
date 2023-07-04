import { useState } from 'react';
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "sing karaoke",
      completed: false,
    },
    {
      id: 2,
      item: "learn react",
      completed: false,
    },
  ]);

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onSubmit = (newTodo: string) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, item: newTodo, completed: false },
    ]);
  }

  return (
    <>
      <Heading />
      <TodoForm onSubmit={onSubmit} />
      <TodoList handleDelete={handleDelete} todos={todos} />
    </>
  );
}

export default App;
