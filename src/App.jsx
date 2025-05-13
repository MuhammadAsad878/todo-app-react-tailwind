import Heading from './components/Heading';
import { useState } from 'react';
import TodoContainer from './components/TodoContainer';


function App() {

  let [todos, setTodos] = useState([]);

  return (
    <>
      <Heading />
      <TodoContainer todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
