import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import FormTodo from './FormTodo';
import { useState, useEffect } from 'react';



function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] =useState([]);
  const [navState, setNavState] = useState('All');

  useEffect(() => {

    const temp =localStorage.getItem("todos")
    const loadedTodos =JSON.parse(temp)
     
    if (loadedTodos){
        setTodos(loadedTodos);
    }
  }, []);
  
  

  return (
    <Router>
     {/* header */}
    <div className="App">
    <h1 className="title"> #todo</h1>
      <Navbar    navState={navState}
        setNavState={setNavState}
      />
      <FormTodo todo={todo}
        todos={todos}
        setTodo={setTodo}
        setTodos={setTodos}
        navState={navState}
      />
    </div>
    </Router>
  );
}

export default App;
