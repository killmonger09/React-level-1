import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if(input.trim() === '') return;
      const newTodo = {id : Date.now(), text : input, completed: false}

       setTodos(todos => [...todos, newTodo])
       setInput("")
    }
   
  

  const handleDelete = (id) => {
   setTodos( todos.filter(todo => todo.id !== id))
  }


  const toggleCompleted = (id) => {      //key prop add //
    setTodos(todos.map(t => {
      if(t.id === id) {
        return {
          ...t,
          completed: !t.completed
        } 
           
      }else {
        return {
          t
        }
      }
     
    }))
  }

  return (
    <>

    <input
      placeholder='write something'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
    onClick={handleAdd}
    >Add To notes</button>

      <div>
      {todos.map((todo) => (
        <p key={todo.id}>
        <input type='checkbox' checked={todo.completed} onChange={() => toggleCompleted(todo.id)}/>
           <span
           className={todo.completed ? 'marked' : '' }
           >{todo.text}</span>
            <button
            onClick={() => handleDelete(todo.id)}
            >delete</button>
        </p>
           ))}
      </div>
   
      
    

    </>
  )
}

export default App
