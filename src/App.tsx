import { FormEvent, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      task: "eat fufu",
      completed: false,
    },
    {
      id: 2,
      task: "eat tofu",
      completed: false,
    },
    {
      id: 3,
      task: "eat snafu",
      completed: false,
    },
  ]);

  const handleDelete = (id: number) => {
    setTodoItems(todoItems.filter(item => item.id !== id))
  }

  const onSubmit = (data: string) => {
    setTodoItems([...todoItems, { task: data, id: todoItems.length+1, completed: false}])
  } 

  return (
    <div>
      <Header />
      <TodoForm onSubmit={(data)=>onSubmit(data)} />
      <TaskList handleDelete={handleDelete} todoItems={todoItems} />
    </div>
  );
}

export default App;
