import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTodo = () => {
    if ( inputValue.trim() === '') return;
    const newTodo = {id: Date.now() , text: inputValue}
    setTodos([...todos, newTodo ]);
    setInputValue("")
  };

  const handleDelete = () => {
    todos.filter(todo.id !== id)
  }

  return (
    <>
     <input 
     placeholder='write something'
      value={inputValue}
      
      onChange={(e) =>setInputValue(e.target.value)}
     />
     <button
     onClick={handleTodo}
     >Add</button>
      <div>
        {todos.map(todo => {
          <p key= {todo.id}>
            <span>{todo.id}</span>
          <span>{todo.text}</span>
          <button
        onClick={handleDelete}
        >Delete</button>
          </p>
          
        })}
        
        </div>       
    </>
  )
}

export default App
