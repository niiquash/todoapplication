import { FormEvent, useState } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TodoForm from './components/TodoForm'

function App() {

  const [items, setItems] = useState(new Array());
  const [singleItem, setSingleItem] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setItems([
      ...items,
      singleItem,
    ])
    setSingleItem('');
  }
 
  const handleDelete = (item: string) => {
    setItems(items.filter(i => i !== item))
  }

  return (
    <div>
      <Header />
      <TodoForm handleSubmit={handleSubmit} singleItem={singleItem} setSingleItem={setSingleItem} />
      <TaskList handleDelete={handleDelete} items={items} />
    </div>
  )
}

export default App
