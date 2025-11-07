import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");


  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id === id));
  }

  const handleAdd = () => {
          if (inputValue.trim() === "") return;
          const newTodo = { id: Date.now(), text: inputValue , completed: 'false'};
          setTodos([...todos, newTodo]);
          setInputValue("");
        }

  return (
    <>
      <p>TO DO - List</p>

      <input
        placeholder="write something"
        className="task-name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={handleAdd}
        > Add
      </button>

      <div>
        {todos.map((todo) => (
          <p key={todo.id}>
            <input type="checkbox" className={todo.completed ? 'marked' : '' }/>
            <span>{todo.text}</span>
      
          <button
          onClick={() => handleDelete(todo.id)}
          >Delete</button></p>
        ))}
      </div>
    </>
  );
}

export default App;
