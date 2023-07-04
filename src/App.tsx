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

  return (
    <>
      <Heading />
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
