import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleAddTodos={handleAddTodos}/>
    </>
  )
}

export default App
