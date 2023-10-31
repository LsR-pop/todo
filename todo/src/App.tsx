import { useState } from 'react';
import './App.css'

function InputBar(props) {
  return (
    <div>
      <input type="text" placeholder="Nom de votre prochaine to do." />
      <button onClick={() =>props.handleaddtodo('todo')}>
        add
      </button>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {value: "exemple 1", status: "active"},
    { value: "exemple 2", status: "completed" },
  ]);
  
  function handleaddtodo(value: string) {
    setTodos((todos) => [...todos, { value, status: "active" }]);
  }

  return (
    <>
      <div className="App">
        <h1>To Do</h1>
        <InputBar handleaddtodo={handleaddtodo}  />
        {todos.map((todo, i) => (
        <li key={i}>{todo.value}</li>
        ))}
      </div>
    </>
  )
}

export default App
