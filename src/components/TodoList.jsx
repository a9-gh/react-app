import { useState } from "react"

function TodoList() {
  const [todos, setTodos] = useState([])      // state for list of todos
  const [task, setTask] = useState("")        // state for input field

  // Add a new todo
  const handleAdd = (e) => {
    e.preventDefault()                        // prevent page reload
    if (task.trim() === "") return            // simple validation
    setTodos([...todos, task])
    setTask("")                               // clear input
  }

  // Remove a todo
  const handleRemove = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <section>
      <h2>Todo List</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoList
